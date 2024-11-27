export interface ParamsProps {
  params:Promise<{
    id: string;
  }>
}

export interface SearchParamsProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export interface ParamsSearchParamsProps {
  params: Promise<{
    id: string;
  }>,
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export interface CategoryParamsProps {
  params: Promise<{
    category: string[];
  }>
}

export interface GenresParams {
  params: Promise<{
    genres: string;
  }>;
}
