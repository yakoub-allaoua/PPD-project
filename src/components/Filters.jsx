import React from "react";
import { Select } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { DarkButton } from "../ui";
const wilayas = [
  { value: "1", label: "Adrar" },
  { value: "2", label: "Chlef" },
  { value: "3", label: "Laghouat" },
  { value: "4", label: "Oum El Bouaghi" },
  { value: "5", label: "Batna" },
  { value: "6", label: "Béjaïa" },
  { value: "7", label: "Biskra" },
  { value: "8", label: "Béchar" },
  { value: "9", label: "Blida" },
  { value: "10", label: "Bouira" },
  { value: "11", label: "Tamanrasset" },
  { value: "12", label: "Tébessa" },
  { value: "13", label: "Tlemcen" },
  { value: "14", label: "Tiaret" },
  { value: "15", label: "Tizi Ouzou" },
  { value: "16", label: "Alger" },
  { value: "17", label: "Djelfa" },
  { value: "18", label: "Jijel" },
  { value: "19", label: "Sétif" },
  { value: "20", label: "Saïda" },
  { value: "21", label: "Skikda" },
  { value: "22", label: "Sidi Bel Abbès" },
  { value: "23", label: "Annaba" },
  { value: "24", label: "Guelma" },
  { value: "25", label: "Constantine" },
  { value: "26", label: "Médéa" },
  { value: "27", label: "Mostaganem" },
  { value: "28", label: "Msila" },
  { value: "29", label: "Mascara" },
  { value: "30", label: "Ouargla" },
  { value: "31", label: "Oran" },
  { value: "32", label: "El Bayadh" },
  { value: "33", label: "Illizi" },
  { value: "34", label: "Bordj Bou Arréridj" },
  { value: "35", label: "Boumerdès" },
  { value: "36", label: "El Tarf" },
  { value: "37", label: "Tindouf" },
  { value: "38", label: "Tissemsilt" },
  { value: "39", label: "El Oued" },
  { value: "40", label: "Khenchela" },
  { value: "41", label: "Souk Ahras" },
  { value: "42", label: "Tipaza" },
  { value: "43", label: "Mila" },
  { value: "44", label: "Aïn Defla" },
  { value: "45", label: "Naâma" },
  { value: "46", label: "Aïn Témouchent" },
  { value: "47", label: "Ghardaïa" },
  { value: "48", label: "Relizane" },
  { value: "49", label: "Timimoun" },
  { value: "50", label: "Bordj Badji Mokhtar" },
  { value: "51", label: "Ouled Djellal" },
  { value: "52", label: "Béni Abbès" },
  { value: "53", label: "In Salah" },
  { value: "54", label: "In Guezzam" },
  { value: "55", label: "Touggourt" },
  { value: "56", label: "Djanet" },
  { value: "57", label: "El M'Ghair" },
  { value: "58", label: "El Meniaa" },
];

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log("search:", value);
};
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Filters = () => {
  return (
    <div className="flex flex-col items-center gap-[20px] w-[320px] ml-[20px] ">
      <div className="flex flex-col gap-[8px]">
        <span className="font-inter font-semibold text-[14px] text-textblack ">
          Wilaya
        </span>
        <Form
          name="basic"
          layout="vertical"
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
          className="flex flex-col gap-[15px] items-center"
        >
          <Select
            showSearch
            placeholder="Select a wilaya"
            optionFilterProp="label"
            onChange={onChange}
            onSearch={onSearch}
            options={wilayas}
            className="w-[320px] h-[45px] border-bggray rounded-[6px] "
          />
          <div className="grid grid-cols-2 gap-x-[25px] mt-[10px]">
            <Form.Item
              label={
                <span className="font-inter font-semibold text-[14px] text-textblack ">
                  price
                </span>
              }
              name="minPrice"
              rules={[
                {
                  required: false,
                  requiredMark: false,
                },
              ]}
            >
              <Input
                placeholder="Min"
                className="h-[45px]"
                suffix={
                  <span className="text-greencol text-[14px] font-medium">
                    DA
                  </span>
                }
              />
            </Form.Item>
            <Form.Item
              name="maxPrice"
              rules={[
                {
                  required: false,
                  requiredMark: false,
                },
              ]}
            >
              <Input
                placeholder="Max"
                className="h-[45px] mt-[30px] "
                suffix={
                  <span className="text-greencol text-[14px] font-medium">
                    DA
                  </span>
                }
              />
            </Form.Item>
            <Form.Item
              label={
                <span className="font-inter font-semibold text-[14px] text-textblack ">
                  surface
                </span>
              }
              name="minSurface"
              rules={[
                {
                  required: false,
                  requiredMark: false,
                },
              ]}
            >
              <Input
                placeholder="Min"
                className="h-[45px]"
                suffix={
                  <span className="text-greencol text-[14px] font-medium">
                    m²
                  </span>
                }
              />
            </Form.Item>
            <Form.Item
              name="maxSurface"
              rules={[
                {
                  required: false,
                  requiredMark: false,
                },
              ]}
            >
              <Input
                placeholder="Max"
                className="h-[45px] mt-[30px] "
                suffix={
                  <span className="text-greencol text-[14px] font-medium">
                    m²
                  </span>
                }
              />
            </Form.Item>
            <Form.Item
              label={
                <span className="font-inter font-semibold text-[14px] text-textblack ">
                  bedrooms
                </span>
              }
              name="minRooms"
              rules={[
                {
                  required: false,
                  requiredMark: false,
                },
              ]}
            >
              <Input
                placeholder="Min"
                className="h-[45px]"
                suffix={<IoBed className="w-[20px] h-[20px] text-greencol " />}
              />
            </Form.Item>
            <Form.Item
              name="maxRooms"
              rules={[
                {
                  required: false,
                  requiredMark: false,
                },
              ]}
            >
              <Input
                placeholder="Max"
                className="h-[45px] mt-[30px] "
                suffix={<IoBed className="w-[20px] h-[20px] text-greencol " />}
              />
            </Form.Item>
            <Form.Item
              label={
                <span className="font-inter font-semibold text-[14px] text-textblack ">
                  bathrooms
                </span>
              }
              name="minBaths"
              rules={[
                {
                  required: false,
                  requiredMark: false,
                },
              ]}
            >
              <Input
                placeholder="Min"
                className="h-[45px]"
                suffix={<FaBath className="w-[18px] h-[18px] text-greencol " />}
              />
            </Form.Item>
            <Form.Item
              name="minBaths"
              rules={[
                {
                  required: false,
                  requiredMark: false,
                },
              ]}
            >
              <Input
                placeholder="Max"
                className="h-[45px] mt-[30px] "
                suffix={<FaBath className="w-[18px] h-[18px] text-greencol " />}
              />
            </Form.Item>
          </div>

          <Form.Item label={null}>
            <DarkButton text="apply" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Filters;
