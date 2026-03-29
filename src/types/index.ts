export interface TeamMember {
  name: {
    first: string;
    last: string;
    title: string;
  };
  email: string;
  location: {
    city: string;
    country: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  login: {
    uuid: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  thumbnail: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
}
