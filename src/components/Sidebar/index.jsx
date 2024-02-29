import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div>
      <Tab.Container defaultActiveKey="first">
        <Nav variant="pills" className="flex-row justify-content-center p-2 ">
          <Nav.Item className="flex-fill text-center">
            <Nav.Link eventKey="first">Design</Nav.Link>
          </Nav.Item>
          <Nav.Item className="flex-fill text-center">
            <Nav.Link eventKey="second">Color</Nav.Link>
          </Nav.Item>
          <Nav.Item className="flex-fill text-center">
            <Nav.Link eventKey="third">Text</Nav.Link>
          </Nav.Item>
          <Nav.Item className="flex-fill text-center">
            <Nav.Link eventKey="forth">Logo</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="p-4 ">
          <Tab.Pane eventKey="first">Design tab</Tab.Pane>
          <Tab.Pane eventKey="second">Color tab</Tab.Pane>
          <Tab.Pane eventKey="third">Text tab</Tab.Pane>
          <Tab.Pane eventKey="forth">Logo tab</Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default Sidebar;
