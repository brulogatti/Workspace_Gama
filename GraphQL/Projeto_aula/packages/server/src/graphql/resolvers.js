import { resolvers as nodeResolvers } from "./Node/Node";
import {resolvers as listResolvers} from "./List/List";
import {resolvers as clientResolvers} from "./Client/Client";
import { resolvers as demandsResolvers } from "./Demand/Demand";


const resolvers = {

    ...nodeResolvers,
    ...listResolvers,
    ...clientResolvers,
    ...demandsResolvers,

    Query:{
        ...clientResolvers.Query,
        ...demandsResolvers.Query,
    },
};

export default resolvers;

