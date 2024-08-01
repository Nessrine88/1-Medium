export interface Post {
    _id: string;
    title: string;
    author: {
      name: string;
      image: string;
    };
    description: string;
    mainImage: {
        asset: {
             _type:'reference',
            _ref:string
        };
    };
    slug:{ 
            current:string,
                _type:'slug'
}
  }