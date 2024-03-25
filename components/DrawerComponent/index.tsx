"use client";
import {
  Bell,
  BellIcon,
  CircleUser,
  CircleUserIcon,
  HelpCircleIcon,
  ShieldAlertIcon,
  UserIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Button, Collapse, CollapseProps, Drawer } from "antd";
import Panel1 from "./Panel1";
import Panel2 from "./Panel2";

function DrawerComponent() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex gap-2">
          <UserIcon />
          <b>Account</b>
        </div>
      ),
      children: <Panel1 />,
    },
    {
      key: "2",
      label: (
        <div className="flex gap-2">
          <BellIcon />
          <b>Notifications</b>
        </div>
      ),
      children: <Panel2 />,
    },
    {
      key: "3",
      label: (
        <div className="flex gap-2">
          <ShieldAlertIcon />
          <b>Privacy Policy</b>
        </div>
      ),
      children: <p>c</p>,
    },
    {
      key: "4",
      label: (
        <div className="flex gap-2">
          <HelpCircleIcon />
          <b>Help & Feedback</b>
        </div>
      ),
      children: <p>c</p>,
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <button onClick={showDrawer} className=" cursor-pointer">
        <CircleUser size={36} />
      </button>
      <Drawer
        title="Account Details"
        onClose={onClose}
        open={open}
        size="large"
      >
        <div className="flex  flex-col items-center justify-center self-center p-6">
          <CircleUser size={64} />
          <p>Name</p>
        </div>
        <div className="rounded-md bg-neutral-200 p-2">
          <Collapse
            items={items}
            defaultActiveKey={["1"]}
            ghost
            expandIcon={() => null}
          />
          <Button block type="primary">
            Logout
          </Button>
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerComponent;
