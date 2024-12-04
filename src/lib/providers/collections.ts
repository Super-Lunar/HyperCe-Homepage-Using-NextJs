import { CollectionsDocument } from "@/generated/graphql";
import { fetcher } from "../fetcher";

export const getCollection = async () => await fetcher({ document: CollectionsDocument });
