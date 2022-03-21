import { IDataProject } from "./dataTypes"

import Znak from "../../content/icons/ProjectCard/znak_map.svg"
import Lomonosov from "../../content/icons/ProjectCard/lomonos_map.svg"
import Vasilki from "../../content/icons/ProjectCard/vasilki_map.svg"
import Krin from "../../content/icons/ProjectCard/krin_map.svg"
import { IFilterBtnProps } from "../../components/SidebarBlock/Buttons/FilterBtn/FilterBtnTypes"

const dataProject: IFilterBtnProps[] = [
  {
    title: "ZNAK",
    logo: Znak
  },
  {
    title: "На Ломоносова",
    logo: Lomonosov
  },
  {
    title: "Васильки",
    logo: Vasilki
  },
  {
    title: "На Калинина",
    logo: Krin
  }
]

export default dataProject
