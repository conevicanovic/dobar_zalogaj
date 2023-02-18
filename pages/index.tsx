import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="h-[3000px] text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet
        arcu condimentum scelerisque cursus. Mauris vitae enim sit amet mauris
        dapibus mollis nec sed risus. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus consequat mi non ex lobortis sodales. Nullam
        porttitor non massa at euismod. Ut fermentum ex urna, eu varius nibh
        scelerisque ultricies. Sed nec massa vitae sem consectetur lacinia.
        Praesent et nisi eget sem tincidunt congue quis in lacus. Fusce id dui
        porta, porta erat at, fermentum erat. Aliquam ultricies magna ac
        efficitur rhoncus. Integer fermentum elementum eleifend. Integer vel
        lacus in enim aliquam euismod at sed eros. Nunc finibus libero vel augue
        condimentum, eget vestibulum leo fermentum. Nunc lobortis augue et erat
        consequat posuere. Vestibulum nisl purus, commodo vitae fringilla eu,
        ultrices eget purus. Mauris ut bibendum lorem. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras
        eleifend sapien quis lorem egestas, at ultrices massa ornare.
        Pellentesque eu egestas diam, vitae laoreet felis. Integer fermentum
        tellus non pharetra vehicula. Aliquam condimentum egestas metus, vel
        lobortis nisl interdum nec. Fusce interdum est non libero blandit
        fringilla. Nunc id risus et erat consectetur molestie sit amet et metus.
        Aliquam at pharetra mi. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Ut mattis ornare ipsum, ut mattis libero condimentum quis.
        Nunc semper odio ac nisi cursus dapibus. Maecenas mauris mi, tempor quis
        auctor vel, tristique non orci. Proin eget orci ac sem placerat maximus
        in vel neque. Aenean turpis dolor, condimentum at dignissim scelerisque,
        placerat eget enim. Duis porttitor massa quis lacus blandit fermentum.
        Cras sodales condimentum commodo. Quisque non interdum nunc. Ut non
        facilisis quam. Nullam in orci purus. Duis gravida magna sit amet ipsum
        accumsan, vitae condimentum sapien aliquam. Fusce consequat, leo sit
        amet laoreet iaculis, nulla dui sagittis enim, ac faucibus lectus lacus
        sed odio. Suspendisse non metus mattis, eleifend libero nec, fermentum
        tortor. In a eros eget metus semper tincidunt quis in dolor. In finibus
        orci et posuere ultrices. Fusce gravida in mi vitae dapibus. In
        scelerisque dictum lectus sit amet tincidunt. Maecenas finibus felis vel
        lectus finibus accumsan. Proin pretium imperdiet eleifend. Suspendisse
        in nibh aliquam, suscipit justo et, luctus eros. Nam accumsan, augue
        vitae ultrices auctor, orci ante pretium orci, quis vulputate nisi nibh
        vitae purus. Suspendisse at pellentesque dolor, et semper nibh. Mauris
        commodo diam turpis. Nulla feugiat vulputate fringilla. Aliquam sed
        commodo enim, in sagittis odio. Etiam a erat et urna congue congue.
        Suspendisse posuere nibh at sapien molestie efficitur. Maecenas nec dui
        imperdiet, convallis est nec, condimentum metus. Aenean in metus quis
        erat suscipit gravida eget ac augue. Aenean non felis tincidunt,
        suscipit nisi quis, sodales lorem. Ut eu accumsan velit, at sagittis
        eros. Nullam in magna vitae arcu condimentum mattis ut eu dui. Mauris
        porttitor at mi vitae tincidunt. Sed porta, nibh quis maximus placerat,
        nisi diam accumsan nunc, dapibus blandit sapien tortor eu diam. Donec
        auctor elit non turpis ultrices, in consectetur libero accumsan. Proin
        eros mi, tempor sit amet suscipit gravida, interdum in ipsum. Nullam
        imperdiet dolor non volutpat pretium. Donec eget tortor efficitur, porta
        magna at, vestibulum ipsum.
      </div>
    </>
  );
}
