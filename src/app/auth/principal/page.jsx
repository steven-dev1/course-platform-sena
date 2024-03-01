import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SignUpCard from '@/components/SignUpCard'
import React from 'react'


function principlal() {
	return (
		<>
			<Header></Header>
			<main>
				<article className="flex mt-3 mb-16 items-center">
					<section className="flex-1 ml-[67.1562px] p-3">
						<div className="flex flex-col justify-end w-2/4 mb-3">
							<h4 className="text-5xl font-bold">Descrubre</h4>
							<h4 className="text-5xl font-bold text-[#FF6C20] relative left-16">Desarrolla</h4>
							<h4 className="text-5xl font-bold">Domina</h4>
						</div>
						<div className="w-3/4 font-medium">
							<p>Nuestra plataforma ofrece una amplia gama de cursos virtuales diseñados para empoderar a las mentes curiosas y ambiciosas.</p>
						</div>
					</section>
					<section className="relative">
						<img className="absolute z-10 w-96 left-20 bottom-0" src="../../public/Character Header.png" alt="" />
						<div className="polygon-header">

						</div>
					</section>
				</article>
				<section className="bg-[#00324D] pb-20 flex flex-col justify-center items-center">
					<div className="my-7">
						<h1 className="text-5xl font-bold text-white">Cursos populares</h1>
					</div>
					<div className="w-full flex justify-evenly">
						<SignUpCard
							title="Desarrollo Front-End con HTML, CSS y JavaScript"
							score="4.8"
							img="../../public/image1.jpg"
							category="Desarrollo de software"
							href="/courses/Desarrollo Front-End con HTML, CSS y JavaScript/info">
						</SignUpCard>

						<SignUpCard
							title="Desarrollo Back-End con PHP, Python y Java"
							score="4.7"
							img="../../public/image2.jpeg"
							category="Desarrollo de software"
							href="/courses/Desarrollo Front-End con HTML, CSS y JavaScript/info"
						>

						</SignUpCard>
						<SignUpCard
							title="Introducción a Bases de datos y SQL"
							score="4.8"
							img="../../public/image3.jpeg"
							category="Desarrollo de software"
							href="/courses/Desarrollo Front-End con HTML, CSS y JavaScript/info"
						>
						</SignUpCard>
					</div>
				</section>
				<section className="flex justify-evenly my-10 items-center text-black">
					<div className="w-1/4 flex flex-col gap-2 items-center justify-center">
						<img className="w-44" src="../../public/Sena Learn LOGO.png" alt="" />
						<p className="font-medium">Creemos en el poder de la educación para cambiar vidas, y estamos aquí para impulsarte en tu viaje hacia el éxito</p>
					</div>
					<ul className="list-disc font-medium">
						<li>Negocios y Emprendimiento</li>
						<li>Diseño y multimedia</li>
						<li>Analisis y desarrollo de software</li>
						<li>Mantenimiento de computadores</li>
						<li>Automotriz</li>
					</ul>
					<ul className="list-disc font-medium">
						<li>Aviación</li>
						<li>Gestión</li>
						<li>Seguridad y salud en el trabajo</li>
						<li>Modistería</li>
						<li>Entrenamiento deportivo</li>
					</ul>
				</section>
			</main>

			<Footer></Footer>
		</>
	)
}

export default principlal