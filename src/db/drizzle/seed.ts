import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
  const jsonPostRepository = new JsonPostRepository();

  const posts = await jsonPostRepository.findAll();

  try {
    console.log("Limpando a base de dados...");
    await drizzleDb.delete(postsTable);
    console.log("Base de dados limpa com sucesso.");
    await drizzleDb.insert(postsTable).values(posts);
    console.log(`${posts.length} posts foram inseridos com sucesso.`);
  } catch (e) {
    console.log();
    console.log("Erro ao tentar inserir na tabela PostsTable");
    console.log();
    console.log(e);
  }
})();
