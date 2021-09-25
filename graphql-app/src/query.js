export const findUserQuery=`
    query findRepos($login: String!) {
        user(login: $login) {
            login
            name
            location
            avatar_url: avatarUrl
            repositories(first: 100) {
                totalCount
                nodes {
                    name
                }
            }
        }
    }`
    