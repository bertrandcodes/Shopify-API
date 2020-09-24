import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';

const CREATE_SCRIPT_TAG = gql`
mutation scriptTagCreate($input: ScriptTagInput!){
    scriptTagCreate(input: $input){
        scriptTag {
            id
        }
        userErrors {
            field
            message
        }
    }
}`;

const QUERY_SCRIPTTAGS = gql`
query{
    scriptTags(first:5){
      edges{
        node{
          id
          src
          displayScope
        }
      }
    }
  }
`

const DELETE_SCRIPTAG = gql`
mutation scriptTagDelete($id: ID!){
    scriptTagDelete(id: $id){
        deletedScriptTagId
    		userErrors{
          field
          message
        }
    }
}
`

function ScriptPage() {

    const [createScripts] = useMutation(CREATE_SCRIPT_TAG)
    const [deleteScripts] = useMutation(DELETE_SCRIPTAG)
    const { loading, error, data } = useQuery(QUERY_SCRIPTTAGS)

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    return (
        <div>
            <h1>These are the script tags right now:</h1>
            <button type='submit' onClick={() => {
                console.log(createScripts)
                createScripts({
                    variables: {
                        input: {
                            src: "https://fd8b3860e19d.ngrok.io/test-script.js",
                            displayScope: "ALL"
                        }
                    },
                    refetchQueries: [{ query: QUERY_SCRIPTTAGS }]
                })
            }}>
                Create Script Tag
            </button>

            {
                data.scriptTags.edges.map(item => {
                    return (
                        <div key={item.node.id}>
                            <p>
                                {item.node.id}
                            </p>
                            <button type='submit' onClick={() => {
                                deleteScripts({
                                    variables: {
                                        id: item.node.id
                                    },
                                    refetchQueries: [{ query: QUERY_SCRIPTTAGS }]
                                })
                            }}>Delete Script Tag</button>
                        </div>

                    )
                })
            }
        </div >
    )
}

export default ScriptPage;