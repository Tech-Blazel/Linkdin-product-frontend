import Andrew from "@/assets/images/Andrew.png";
import Einat from "@/assets/images/Einat.png";
import Chip from "@/assets/images/chip.png";
import Ines from "@/assets/images/Ines.png";
import Matei from "@/assets/images/Matei.png"
import Ali from "@/assets/images/Ali.png"
import Maxime from "@/assets/images/Maxime.png"
import Barr from "@/assets/images/Barr.png"
import Elad from "@/assets/images/Elad.png"
import { deanCategories, KanishkCategories, lawrenceCategories, stanCategories } from "./SamplePostsCategories";

export const influencerImages:any = {
    "Andrew Ng":Andrew,
    "Dr. Einat Orr":Einat,
    "Chip Huyen":Chip,
    "Ines Montani":Ines,
    "Matei Zaharia":Matei,
    "Ali Ghodsi":Ali,
    "Maxime Beauchemin":Maxime,
    "Barr Moses":Barr,
    "Elad Gil":Elad
}

export const linkedInClients = [
  {
    "name": "Lawrence Coburn",
    "title": "CEO / Co-Founder at Ambient, an AI Assistant for the Office of the CEO.",
    "profileUrl": "https://www.linkedin.com/in/lawrencecoburn",
    "profilePictureUrl": "https://media.licdn.com/dms/image/v2/D5603AQH7FERo4vXiww/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1696271215080?e=1753315200&v=beta&t=3ONvfiXAw3Twi1wA9nNmBe6XIa_g1jTDEkZ_LnQSYoI"
  },
  {
    "name": "Dean Pleban",
    "title": "Co-Founder & CEO at DagsHub | AI Data Development Platform",
    "profileUrl": "https://www.linkedin.com/in/deanpleban",
    "profilePictureUrl": "https://media.licdn.com/dms/image/v2/C4D03AQFwOK8NRGF3IQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1549701726893?e=1752710400&v=beta&t=LQwERWD22Ou4DG-HMqdA4438U_YSt-NNd_cqrOa7UAg"
  },
  {
    "name": "Kanishk Parashar",
    "title": "Co-Founder and CEO @ Powder(YCW24)",
    "profileUrl": "https://www.linkedin.com/in/kanishkparashar",
    "profilePictureUrl": "https://media.licdn.com/dms/image/v2/C5603AQFSNCrh0UTJBw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1650568472000?e=1753315200&v=beta&t=EvpA97gJvjlYCQoQS-niDVpp-Tm4Yj7bnM4u9QOVqtY"
  },
  {
    "name": "Stan Markuze",
    "title": "CEO, Balance Cash",
    "profileUrl": "N/A",
    "profilePictureUrl": "https://media.licdn.com/dms/image/v2/C5603AQHHYdnksjrgnQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1658515315248?e=1753315200&v=beta&t=ticqP83Vj7twLOLbG0_eXXKlqTo4YbAaP42IzAy1p-8"
  },
  {
    "name": "Stefan Von Imhof",
    "title": "CEO @ Alts.co",
    "profileUrl": "https://www.linkedin.com/in/stefanvonimhof",
    "profilePictureUrl": "https://media.licdn.com/dms/image/v2/D5603AQEQbNMaZCppZA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1687751303809?e=1753315200&v=beta&t=0HGzla-mMaKaywyQEt5JDm4-cQiEBcbbnVegVGGv16w"
  },
  {
    "name": "Bill Douglas",
    "title": "OpticWise: Building CRE Value with Data & Digital Infrastructure Ownership",
    "profileUrl": "https://www.linkedin.com/in/billdouglas",
    "profilePictureUrl": "https://media.licdn.com/dms/image/v2/D5603AQG2OhauJ4I58w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1685031779706?e=1751500800&v=beta&t=SCGOdL1ffEtdPwP73l6hzNsdDX9b2aEES9SPAKovEOA"
  },
  {
    "name": "Caelan Urquhart",
    "title": "Co-founder | Scaling data & CI pipelines @ Pipekit",
    "profileUrl": "https://www.linkedin.com/in/caelanurquhart",
    "profilePictureUrl": "https://media.licdn.com/dms/image/v2/C4D03AQHsjIhXkMFhHA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1537483310838?e=1753315200&v=beta&t=uMBwmdm6p2e0UlCSxHv467JWb-_SM0Q5tAXUogSn1zE"
},
]

// export const influencerImages:any = {
//   "Matei Zaharia":Matei,
//   "Ali Ghodsi":Ali,
//   "Maxime Beauchemin":Maxime,
//   "Barr Moses":Barr
// }

export type SidebarItem = {
    icon: React.ReactNode;
    label: string;
    path: string;
};
  
export type HeaderType = {
    [path: string]: string;
};

export const headerType: HeaderType = {
    "/dashboard": "Admin Dashboard",
    "/user-management": "User Management",
    "/admin-profile": "Admin Profile",
    "/clients": "Clients Dashboard",
    "/linkedin-audit-report": "LinkedIn Audit Report",
  "/category-management": "Category Management",
  "/upload-data": "Upload Data",
  "/linkedin-clients":"LinkedIn Clients"
};

export const pieChartColor = ['#ffc924', '#6384ff', '#6cceff', '#78ea80', '#fb8a85', "#ff5733"]
  

export const convertObjectToArrayOfObjectsData = (
  input: Record<string, number>,
  options?: {
    colors?: string[];
    nameKey?: string;
    valueKey?: string;
  }
): Record<string, any>[] => {
  const { colors = [], nameKey = "name", valueKey = "value" } = options || {};

  return Object.entries(input).map(([key, val], index) => {
    const base = {
      [nameKey]: key,
      [valueKey]: val,
    };

    if (colors[index]) {
      return { ...base, color: colors[index] };
    }

    return base;
  });
};

  
type GenericInputItem = {
  [key: string]: string | number;
};

type OutputItem = {
  name: string;
  value: number;
  color: string;
};

export function transformDataWithColors(data: GenericInputItem[], colors: string[]): OutputItem[] {
  return data.map((item, index) => {
    let name: string | undefined = undefined;
    let value: number | undefined = undefined;

    for (const key in item) {
      const val = item[key];
      if (typeof val === 'string' && name === undefined) {
        name = val;
      } else if (typeof val === 'number' && value === undefined) {
        value = val;
      }

      // Stop early if both are found
      if (name !== undefined && value !== undefined) break;
    }

    if (name === undefined || value === undefined) {
      throw new Error(`Item at index ${index} does not have both a string and a number property`);
    }

    return {
      name,
      value,
      color: colors[index % colors.length],
    };
  });
}

export const toSlugName = (name: string): string => {
  return name.trim().toLowerCase().replace(/\s+/g, "-");
}

export const fromSlugName = (slug: string): string => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");
}

export const samplePostsConfigs: Record<
  string,
  { categories: any; component?: React.FC }
> = {
  "Dean Pleban": {
    categories: deanCategories,
  },
  "Lawrence Coburn": {
    categories: lawrenceCategories,
  },
  "Stan Markuze": {
    categories: stanCategories,
  },
  "Kanishk Parashar": {
    categories: KanishkCategories,
  },
};