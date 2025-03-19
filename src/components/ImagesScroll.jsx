import React from "react";
import {
  DownloadOutlined,
  LeftOutlined,
  RightOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { Image, Space, Row, Col } from "antd";
import img1 from "../assets/test/1.png";
import img2 from "../assets/test/11.png";
import img3 from "../assets/test/22.png";
import img4 from "../assets/test/33.png";

const imageList = [img1, img2, img3, img4];

const ImagesScroll = () => {
  const [current, setCurrent] = React.useState(0);

  const onDownload = () => {
    const url = imageList[current];
    const suffix = url.slice(url.lastIndexOf("."));
    const filename = Date.now() + suffix;
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(blobUrl);
        link.remove();
      });
  };
  return (
    <Image.PreviewGroup
      preview={{
        toolbarRender: (
          _,
          {
            transform: { scale },
            actions: {
              onActive,
              onFlipY,
              onFlipX,
              onRotateLeft,
              onRotateRight,
              onZoomOut,
              onZoomIn,
              onReset,
            },
          }
        ) => (
          <Space size={12} className="toolbar-wrapper">
            <LeftOutlined onClick={() => onActive?.(-1)} />
            <RightOutlined onClick={() => onActive?.(1)} />
            <DownloadOutlined onClick={onDownload} />
            <SwapOutlined rotate={90} onClick={onFlipY} />
            <SwapOutlined onClick={onFlipX} />
            <RotateLeftOutlined onClick={onRotateLeft} />
            <RotateRightOutlined onClick={onRotateRight} />
            <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
            <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
            <UndoOutlined onClick={onReset} />
          </Space>
        ),
        onChange: (index) => {
          setCurrent(index);
        },
      }}
    >
      <Row gutter={[8, 8]}>
        <Col xs={24} md={12}>
          <Image
            src={imageList[0]}
            width="100%"
            height="100%"
            style={{ borderRadius: "8px" }}
          />
        </Col>
        <Col xs={24} md={12}>
          <Row gutter={[8, 8]}>
            {imageList.slice(1).map((item, index) => (
              <Col key={index} xs={8} md={12}>
                <Image
                  src={item}
                  width="100%"
                  style={{ borderRadius: "8px" }}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Image.PreviewGroup>
  );
};
export default ImagesScroll;
