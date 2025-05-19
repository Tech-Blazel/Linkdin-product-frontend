import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  addCategory,
  deleteCategory,
  editCategoryName,
  fetchCategories,
} from "@/features/CategorySlice";
import Modal from "@/components/Modal";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Category name is required"),
});

const CategoryManagement = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state: any) => state.categories
  );

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const formik = useFormik({
    initialValues: { name: "" },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      if (selectedCategory) {
        dispatch(
          editCategoryName({ id: selectedCategory.id, name: values.name })
        );
        setEditDialogOpen(false);
        setSelectedCategory(null);
      } else {
        // dispatch(addCategory(values.name));
      }
      resetForm();
    },
  });

  useEffect(() => {
    // dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Category Management</h1>

        <Card className="p-4 space-y-4">
          <form onSubmit={formik.handleSubmit} className="flex gap-4">
            <Input
              placeholder="Enter new category name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <Button
              type="submit"
              className="bg-primary text-white cursor-pointer"
            >
              {selectedCategory ? "Save Changes" : "Add Category"}
            </Button>
          </form>

          <Table className="mt-4">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40%]">Name</TableHead>
                <TableHead className="w-[20%]">Status</TableHead>
                <TableHead className="w-[40%]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories?.map((cat: any) => (
                <TableRow key={cat.id}>
                  <TableCell>{cat.name}</TableCell>
                  <TableCell className="text-green-600">{cat.status}</TableCell>
                  <TableCell className="space-x-2">
                    <Modal
                      title="Profile View"
                      trigger={
                        <Button variant="outline" className="cursor-pointer">
                          View Profiles
                        </Button>
                      }
                      showHeader={true}
                      showActionButton={false}
                      widthClass="max-w-xl"
                    >
                      <div className="text-sm text-muted-foreground">
                        <p>
                          <strong>Category:</strong> {cat.name}
                        </p>
                        <p>
                          <strong>Status:</strong> {cat.status}
                        </p>
                        <p className="mt-2">
                          This section can be extended to show associated
                          profiles or details.
                        </p>
                      </div>
                    </Modal>

                    <Modal
                      title="Edit Category"
                      trigger={
                        <Button
                          variant="secondary"
                          className="cursor-pointer"
                          onClick={() => {
                            setSelectedCategory(cat);
                            formik.setValues({ name: cat.name });
                            setEditDialogOpen(true);
                          }}
                        >
                          Edit
                        </Button>
                      }
                      showHeader={true}
                      showActionButton={false}
                      widthClass="max-w-md"
                    >
                      <form
                        onSubmit={formik.handleSubmit}
                        className="space-y-4"
                      >
                        <Input
                          name="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.name && (
                          <p className="text-sm text-red-500">
                            {formik.errors.name}
                          </p>
                        )}
                        <Button type="submit" className="bg-primary text-white">
                          Save
                        </Button>
                      </form>
                    </Modal>
                    <Button
                      variant="destructive"
                      // onClick={() => dispatch(deleteCategory(cat.id))}
                      className="cursor-pointer"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default CategoryManagement;
