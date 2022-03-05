import { hash } from "bcryptjs";
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { username, password } = data;

  if (!username || !password || password.trim().length < 7) {
    res.status(422).json({
      message:
        "Invalid input - password should also be at least 7 characters long.",
    });
    return;
  }

  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db();

  const existingUser = await db
    .collection("users")
    .findOne({ username: username });

  if (existingUser) {
    res.status(422).json({ message: "User exists already!" });
    client.close();
    return;
  }

  const hashedPassword = await hash(password, 12);

  const result = await db.collection("users").insertOne({
    username: username,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user!" });
  client.close();
}

export default handler;
