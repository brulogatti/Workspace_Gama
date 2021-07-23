import { gql } from 'apollo-server-express';

import { typeDefs as clientTypeDefs} from "./Client/Client";
import { typeDefs as demandsTypeDefs } from "./Demand/Demand";

const typeDefs = gql`
type Query {
    _root: String
}

${clientTypeDefs}    
${demandsTypeDefs}
`
export default typeDefs;
