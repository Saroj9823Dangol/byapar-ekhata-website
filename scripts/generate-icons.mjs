// One-off icon generator: derives the favicon set from public/logo.jpeg.
// Run with `node scripts/generate-icons.mjs` and delete the output if the logo changes.
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const source = path.join(root, "public", "logo.jpeg");
const out = (name) => path.join(root, "public", name);

const png = (size) =>
  sharp(source, { failOn: "none" })
    .resize(size, size, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toBuffer();

for (const [size, name] of [
  [192, "icon-192.png"],
  [512, "icon-512.png"],
  [32, "favicon-32.png"],
  [16, "favicon-16.png"],
]) {
  await writeFile(out(name), await png(size));
}

// Apple touch icons must be opaque — the logo already is, so just flatten it.
await writeFile(
  out("apple-touch-icon.png"),
  await sharp(source, { failOn: "none" })
    .resize(180, 180, { fit: "cover" })
    .flatten({ background: "#ffffff" })
    .png({ compressionLevel: 9 })
    .toBuffer(),
);

// A PNG-compressed ICO (supported by every current browser).
const icon32 = await sharp(source, { failOn: "none" })
  .resize(32, 32, { fit: "cover" })
  .png({ compressionLevel: 9 })
  .toBuffer();

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // image count

const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0); // width
entry.writeUInt8(32, 1); // height
entry.writeUInt8(0, 2); // palette size
entry.writeUInt8(0, 3); // reserved
entry.writeUInt16LE(1, 4); // colour planes
entry.writeUInt16LE(32, 6); // bits per pixel
entry.writeUInt32LE(icon32.length, 8); // payload size
entry.writeUInt32LE(22, 12); // payload offset

await writeFile(out("favicon.ico"), Buffer.concat([header, entry, icon32]));

console.log("icons written to public/");
