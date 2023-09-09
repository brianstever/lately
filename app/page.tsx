import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Transforming ideas into&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>digital realities.&nbsp;</h1>
				<br />
				<h2 className={subtitle({ class: "mt-4" })}>
					Full-stack web solutions tailored to your needs.
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					as={NextLink}
					href={siteConfig.links.twitter} 
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Twitter
				</Link>
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.contact}
				>
					Contact
				</Link>
			</div>

			<div className="mt-8 text-center">
				<h2 className={subtitle({ class: "mt-4" })}>
					Leverage the power of the modern web with lately.design.
				</h2>
			</div>
		</section>
	);
}
