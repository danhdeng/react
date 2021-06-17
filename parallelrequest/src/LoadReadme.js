export const loadReadme=async(login, repo){
    const uri=`https://api.github.com/users/repo/${login}/${repo}/readm`;
    const {download_url}=await fetch(uri).then(res=>res.json());
    const markdown=await fetch(uri).then(res=>res.text());
    console.log(`Markdown for ${repos}\n\n${markdown}`);
}