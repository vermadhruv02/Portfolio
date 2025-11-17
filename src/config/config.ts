const URL = `${import.meta.env.VITE_BACKEND_URL}/api/projects` ;
async function getProject() {
  // console.log(URL);
  const data = await fetch(URL);
  const result = await data.json();
  // console.log(`result: ${JSON.stringify(result)}`);
  return result;
}
export default getProject;
