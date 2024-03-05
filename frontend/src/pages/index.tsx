import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  return (
    <div
      style={{
        width: "640px",
        margin: "0 auto",
      }}
    >
      <h1>Todo app</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <TaskCreateForm />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <TaskItem title="task-1" completed={true} />
          <TaskItem title="task-2" completed={false} />
        </div>
      </div>
    </div>
  );
}

type TaskItemProps = {
  title: string;
  completed: boolean;
};

function TaskItem({ title, completed }: TaskItemProps) {
  const [isEdit, setIsEdit] = useState(false);

  const onChangeCompleted = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
  };

  return isEdit ? (
    <TaskUpdateForm
      title={title}
      onSubmit={() => setIsEdit(false)}
      onCancel={() => setIsEdit(false)}
    />
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <input type="checkbox" checked={completed} onChange={onChangeCompleted} />
      <div>{title}</div>
      <button onClick={() => setIsEdit(true)}>Edit</button>
      <button>Delete</button>
    </div>
  );
}

function TaskCreateForm() {
  const titleInput = useTextInput();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(titleInput.value);
    titleInput.set("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...titleInput.bind} />
      <button type="submit" style={{ marginLeft: "8px" }}>
        Post
      </button>
    </form>
  );
}

type TaskUpdateFormProps = {
  title: string;
  onSubmit: () => void;
  onCancel: () => void;
};

function TaskUpdateForm({ title, onSubmit, onCancel }: TaskUpdateFormProps) {
  const titleInput = useTextInput(title);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(titleInput.value);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...titleInput.bind} />
      <button type="submit" style={{ marginLeft: "8px" }}>
        Post
      </button>
      <button type="submit" style={{ marginLeft: "8px" }} onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

function useTextInput(defaultValue = "") {
  const [value, set] = useState(defaultValue);

  function onChange(e: ChangeEvent<HTMLInputElement>): void {
    set(e.target.value);
  }

  return {
    value,
    set,
    bind: {
      value,
      onChange,
    },
  };
}
