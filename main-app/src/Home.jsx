import React, { useState } from "react";
import { Button, Descriptions, Result, Avatar, Space, Statistic } from "antd";
import { createBrowserHistory } from "history";

// import type { ProSettings } from '@ant-design/pro-layout';
import ProLayout from "@ant-design/pro-layout";
import defaultProps from "./_defaultProps";

export default (props) => {
  const [settings, setSetting] = useState({ fixSiderbar: true });
  const history = createBrowserHistory();
  const [pathname, setPathname] = useState("/welcome");
  return (
    <div
      id="test-pro-layout"
      style={{
        height: "100vh",
      }}
    >
      <ProLayout
        {...defaultProps}
        location={{
          pathname,
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              console.log(item);
              setPathname(item.path || "/welcome");
              history.push(item.path);
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            {/* <Avatar shape="square" size="small" icon={<UserOutlined />} /> */}
          </div>
        )}
        {...settings}
      >
        <div id="react"></div>
        <div id="vue"></div>
      </ProLayout>
    </div>
  );
};
