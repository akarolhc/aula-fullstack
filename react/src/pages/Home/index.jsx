import Forms from "../../components/Forms";
import List from "../../components/List";
import Video from "../../components/Video";

export default function Home () {
    return (
        <main>
            <List titulo="Seção de Listas"></List>
            <List />
            <Video />
            <Forms />
        </main>
    )
}