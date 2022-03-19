import "./App.css";
import { ChatEngine } from "react-chat-engine";
import { ChatFeed, LoginForm } from "./components";
import { projectID } from "./config";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
}

export default App;
