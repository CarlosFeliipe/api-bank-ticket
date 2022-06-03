import multer from "multer";
import path from "path";
import crypto from "crypto";

const storage = multer.diskStorage({
  destination: path.resolve("uploads"),
  filename: (req, file, callback) => {
    crypto.randomBytes(16, (_err, hash) => {
      const filename = `${hash.toString("hex")}-${file.originalname}`;

      return callback(null, filename);
    });
  },
});

const upload = multer({ storage });

export default upload;
