import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
const DB_ID = process.env.DATABASE_ID ?? "";

export default function Home(props: unknown) {
  return <div>{JSON.stringify(props)}</div>;
}

export async function getStaticProps() {
  console.log("process.env.NOTION_TOKEN", process.env.NOTION_TOKEN);
  console.log("process.env.DATABASE_ID", process.env.DATABASE_ID);
  const db = await notion.databases.query({ database_id: DB_ID });
  console.log(db);
  return { props: db };
}
