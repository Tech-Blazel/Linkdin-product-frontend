import Andrew from "@/assets/images/Andrew.png";
import Einat from "@/assets/images/Einat.png";
import Chip from "@/assets/images/chip.png";
import Ines from "@/assets/images/Ines.png";

export const influencerImages:any = {
    "Andrew Ng":Andrew,
    "Dr. Einat Orr":Einat,
    "Chip Huyen":Chip,
    "Ines Montani":Ines
}

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
};

export const pieChartColor = ['#ffc924', '#6384ff', '#6cceff', '#78ea80', '#fb8a85']
  

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