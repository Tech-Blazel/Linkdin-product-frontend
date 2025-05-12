import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "User";
  status: "Active" | "Inactive";
  created: string;
};

const initialUsers: User[] = [
  {
    id: 8,
    name: "Akash Sharma",
    email: "akash.rdec18@gmail.com",
    role: "Admin",
    status: "Active",
    created: "Apr 29, 2025",
  },
  {
    id: 7,
    name: "Ella Salalac",
    email: "ella@pragents.com",
    role: "Admin",
    status: "Active",
    created: "Apr 28, 2025",
  },
  {
    id: 6,
    name: "Zain Jaffer",
    email: "zain@zainjaffer.com",
    role: "Admin",
    status: "Active",
    created: "Apr 24, 2025",
  },
  {
    id: 5,
    name: "vaibhav rokde",
    email: "vaibhav+1@pragents.com",
    role: "User",
    status: "Active",
    created: "Apr 24, 2025",
  },
  {
    id: 4,
    name: "shivaji meena",
    email: "shivajimeena55@gmail.com",
    role: "User",
    status: "Active",
    created: "Apr 24, 2025",
  },
  {
    id: 3,
    name: "Sahil Kaushal",
    email: "ca.skaushal@gmail.com",
    role: "Admin",
    status: "Active",
    created: "Apr 24, 2025",
  },
  {
    id: 2,
    name: "khemraj meena",
    email: "khemraj@pragents.com",
    role: "Admin",
    status: "Active",
    created: "Apr 24, 2025",
  },
  {
    id: 1,
    name: "vaibhav rokde",
    email: "vaibhav@pragents.com",
    role: "Admin",
    status: "Active",
    created: "Apr 24, 2025",
  },
];

export const UserTable = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between flex-wrap gap-2 items-center mb-4">
        <h2 className="text-lg font-semibold">User Management</h2>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-[250px]"
          />
          <Button variant="outline">Search</Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Select
                  defaultValue={user.role}
                  onValueChange={(value) =>
                    setUsers((prev) =>
                      prev.map((u) =>
                        u.id === user.id
                          ? { ...u, role: value as "Admin" | "User" }
                          : u
                      )
                    )
                  }
                >
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="User">User</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <span className="text-green-600 font-medium">
                  {user.status}
                </span>
              </TableCell>
              <TableCell>{user.created}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-500 hover:bg-blue-50"
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
