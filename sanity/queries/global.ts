export interface GlobalDataQuery {
  githubUrl: string;
  linkedinUrl: string;
}

export const globalDataQuery = `*[_id == 'global' && _type == 'global'] {
  githubUrl,
  linkedinUrl
}[0]`