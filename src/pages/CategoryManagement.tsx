import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  addCategory,
  deleteCategory,
  editCategoryName,
  fetchCategories,
} from "@/features/CategorySlice";

const formSchema = z.object({
  name: z.string().min(1, "Category name is required"),
});

type FormValues = z.infer<typeof formSchema>;

const CategoryManagement = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state: any) => state.categories
  );
  const { register, handleSubmit, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    // dispatch(fetchCategories());
  }, [dispatch]);

  const onSubmit = (data: FormValues) => {
    // dispatch(addCategory(data.name));
    reset();
  };

  console.log("data", categories);
  return (
    <div>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Category Management</h1>

        <Card className="p-4 space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
            <Input
              placeholder="Enter new category name"
              {...register("name")}
            />
            <Button
              type="submit"
              className="bg-primary text-white cursor-pointer"
            >
              Add Category
            </Button>
          </form>

          <table className="w-full text-left mt-4">
            <thead>
              <tr className="border-b">
                <th className="py-2">Name</th>
                <th className="py-2">Status</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((cat: any) => (
                <tr key={cat.id} className="border-b">
                  <td className="py-2">{cat.name}</td>
                  <td className="py-2 text-green-600">{cat.status}</td>
                  <td className="py-2 space-x-2">
                    <Button variant="outline" className="cursor-pointer">
                      View Profiles
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() =>
                        dispatch(
                          editCategoryName({
                            id: cat.id,
                            name: prompt("Edit name:", cat.name) || cat.name,
                          })
                        )
                      }
                      className="cursor-pointer"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      //   onClick={() => dispatch(deleteCategory(cat.id))}
                      className="cursor-pointer"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default CategoryManagement;
