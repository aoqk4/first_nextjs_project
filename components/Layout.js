import NavBar from "./NavBar";

export default function Layout(props) {
  const { children } = props;
  console.log(props);
  return (
    <div id="sunmoon">
      <NavBar />
      {children}
    </div>
  );
}
