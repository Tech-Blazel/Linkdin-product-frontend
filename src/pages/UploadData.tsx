import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const validationSchema = Yup.object().shape({
  uploadType: Yup.string().oneOf(["category", "client"]).required(),
  uploadMethod: Yup.string().oneOf(["json", "linkedin"]).required(),
  //   jsonFile: Yup.mixed().when("uploadMethod", {
  //     is: "json",
  //     then: Yup.mixed().required("JSON file is required"),
  //   }),
  //   linkedinUrls: Yup.string().when("uploadMethod", {
  //     is: "linkedin",
  //     then: Yup.string().required("LinkedIn URLs are required"),
  //   }),
  maxPosts: Yup.number().optional(),
});

const UploadData = () => {
  const [uploadMethod, setUploadMethod] = useState("json");

  const formik = useFormik({
    initialValues: {
      uploadType: "client",
      uploadMethod: "linkedin",
      jsonFile: null,
      linkedinUrls: "",
      maxPosts: 300,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Submitted:", values);
    },
  });

  const handleUploadTypeChange = (val: string) => {
    formik.setFieldValue("uploadType", val);
    if (val === "client") {
      formik.setFieldValue("uploadMethod", "linkedin");
      setUploadMethod("linkedin");
    } else {
      setUploadMethod(formik.values.uploadMethod);
    }
  };

  return (
    <div>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Upload Data</h1>

        <Card className="p-4 space-y-4">
          <form onSubmit={formik.handleSubmit} className="space-y-6 p-6">
            <h2 className="text-xl font-bold text-center text-primary">
              Upload JSON to MongoDB
            </h2>

            <div className="space-y-2">
              <Label>Upload Type:</Label>
              <RadioGroup
                defaultValue={formik.values.uploadType}
                onValueChange={handleUploadTypeChange}
                className="flex flex-row flex-wrap gap-4"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="category" id="category" />
                  <Label htmlFor="category">Category</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="client" id="client" />
                  <Label htmlFor="client">Client</Label>
                </div>
              </RadioGroup>
            </div>

            <p className="text-xs text-blue-500">
              Client data will be automatically saved to the "clients"
              collection.
            </p>

            {formik.values.uploadType !== "client" && (
              <div className="space-y-2">
                <Label>Upload Method:</Label>
                <RadioGroup
                  defaultValue={formik.values.uploadMethod}
                  onValueChange={(val) => {
                    setUploadMethod(val);
                    formik.setFieldValue("uploadMethod", val);
                  }}
                  className="flex flex-row flex-wrap gap-4"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="json" id="json" />
                    <Label htmlFor="json">Upload JSON File</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="linkedin" id="linkedin" />
                    <Label htmlFor="linkedin">Scrape LinkedIn URL</Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {uploadMethod === "json" && (
              <div className="space-y-2">
                <Label htmlFor="jsonFile">JSON File:</Label>
                <Input
                  type="file"
                  id="jsonFile"
                  name="jsonFile"
                  onChange={(e) =>
                    formik.setFieldValue("jsonFile", e.currentTarget.files?.[0])
                  }
                />
                {formik.errors.jsonFile && (
                  <p className="text-sm text-red-500">
                    {formik.errors.jsonFile}
                  </p>
                )}
              </div>
            )}

            {uploadMethod === "linkedin" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="linkedinUrls">
                    LinkedIn URLs (one per line):
                  </Label>
                  <Textarea
                    id="linkedinUrls"
                    name="linkedinUrls"
                    rows={4}
                    placeholder="https://www.linkedin.com/in/username/"
                    onChange={formik.handleChange}
                    value={formik.values.linkedinUrls}
                  />
                  {formik.errors.linkedinUrls && (
                    <p className="text-sm text-red-500">
                      {formik.errors.linkedinUrls}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxPosts">Maximum posts per profile:</Label>
                  <Input
                    id="maxPosts"
                    name="maxPosts"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.maxPosts}
                  />
                  <p className="text-xs text-muted-foreground">
                    Maximum number of posts to scrape per profile.
                  </p>
                </div>
              </>
            )}

            <Button type="submit" className="w-full text-white cursor-pointer">
              Upload
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default UploadData;
