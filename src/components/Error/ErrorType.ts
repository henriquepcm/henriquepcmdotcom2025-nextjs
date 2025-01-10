import { ApolloError } from "@apollo/client";

export interface onErrorProps {
     onError: (error: ApolloError) => void;
}
