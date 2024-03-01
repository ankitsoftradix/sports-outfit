import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import styles from "./Sidebar.module.scss";
import Color from "../Tabs/Color";

const Sidebar = () => {
  return (
    <div>
      <Tab.Container defaultActiveKey="second">
        <div className={styles.mainWrap}>
          <Nav variant="pills" className={styles.topBar}>
            {/* <Nav.Item className="flex-fill text-center">
            <Nav.Link eventKey="first">Design</Nav.Link>
          </Nav.Item> */}
            <Nav.Item className={styles.topBarItem}>
              <Nav.Link eventKey="second">Color</Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.topBarItem}>
              <Nav.Link eventKey="third">Text</Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.topBarItem}>
              <Nav.Link eventKey="forth">Logo</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className={styles.contentWrap}>
            {/* <Tab.Pane eventKey="first">
            <DesignTab />
          </Tab.Pane> */}
            <Tab.Pane eventKey="second">
              <Color />
            </Tab.Pane>
            <Tab.Pane eventKey="third">Text tab</Tab.Pane>
            <Tab.Pane eventKey="forth">Logo tab</Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  );
};

export default Sidebar;
