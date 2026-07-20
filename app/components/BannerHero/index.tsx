import Image from "next/image";
import Button from "../Button";
import BannerHeroImage from "../../assets/images/banner-hero.svg";

export default function BannerHero() {
  return (
    <div className="flex justify-between items-center gap-16 width-full py-12 bg-[radial-gradient(circle_at_0%_0%,theme(colors.blue.700/.0)_0%,transparent_0%),radial-gradient(circle_at_85%_15%,theme(colors.blue.700/.25)_0%,transparent_10%),radial-gradient(circle_at_40%_40%,theme(colors.blue.700/.10)_0%,transparent_40%),radial-gradient(circle_at_10%_10%,theme(colors.blue.700/.10)_0%,transparent_10%)]">
      <div>
        <h1 className="text-6xl font-bold mb-4 text-shadow-md">
          100% Free <span className="text-primary">Technology Courses</span>
        </h1>
        <p className="opacity-70 max-w-lg line-height-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since 1966, when designers at Letraset and James Mosley, the librarian
          at St Bride Printing Library in London, took a 1914 Cicero translation
          and scrambled it to make dummy text for Letraset's Body Type sheets.
        </p>
        <div className="mt-8 flex gap-4">
          <Button label="Explore Courses" className="shadow-2xs" />
          <Button label="GitHub" type="outlined" />
        </div>
      </div>
      <Image src={BannerHeroImage} alt="Banner Hero" width={500} height={500} />
    </div>
  );
}
