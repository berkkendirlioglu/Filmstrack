export interface ParamsProps {
    params:{
      id:string;
    }
  }

export interface SearchParamsProps {
  searchParams: {
    [key:string]:string | string[] | undefined;
  };
}

export interface ParamsSearchParamsProps {
  params:{
    id:string;
  }
  searchParams: {
    [key:string]:string | string[] | undefined;
  };
}

export interface CategoryParamsProps {
  params:{
    category:string[];
  }
}

export interface GenresParams {
  params:{
    genres:string,
  }
}