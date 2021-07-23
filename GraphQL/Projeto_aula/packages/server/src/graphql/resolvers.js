import { resolvers as demandsResolvers } from "./Demand/Demand";
import {resolvers as clientResolvers} from "./Client/Client";

const resolvers = {
    ...demandsResolvers,
    ...clientResolvers,

    Query:{
        ...demandsResolvers.Query,
        ...clientResolvers.Query,
    },
}

export default resolvers;

