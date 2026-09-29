import { TemuSearchScraper } from './nodes/TemuSearchScraper/TemuSearchScraper.node';
import { ApifyApi } from './credentials/ApifyApi.credentials';

export const nodeTypes = [TemuSearchScraper];

export const credentialTypes = [ApifyApi];
