import { Switch } from "antd";

function Panel2() {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full justify-between gap-2">
        <p>Push</p>
        <Switch onChange={onChange} />
      </div>
      <div className="flex w-full justify-between gap-2">
        <p>E-mail</p>
        <Switch onChange={onChange} />
      </div>
    </div>
  );
}

export default Panel2;
