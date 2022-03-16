
import React from 'react';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import css from './BlogPage.module.css';

const BlogPage = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>
          <h1>BLOG</h1>

          <div>
          <h3>Famous Nordic artists. 16.03.2022</h3>

            <p>

With picturesque coastal landscapes, ubiquitous green energy, socially progressive policy, smart minimalist design, and ample government spending on the the arts, it's not surprising that artists thrive in the Nordic countries of Denmark, Finland, Sweden, Norway, and Iceland. We've put together a list of 10 Nordic artists you need to know.</p>

 

 

<p>Bjarne Melgaard</p>





 

<p>Widely touted as Norway's most important artist since Edvard Munch, Bjarne Melgaard became notorious in the late '90s for controversial installations that referenced S&M and heavy metal music. While explicitly sexual and violent subcultures thematically dominated his early work, he has since become best known for his loose, humorous, and colorful expressive painting—though his installations still contain overt sex and drug references, and his paintings often have something sketchy going on if you look closely. Melgaard considers his exhibition sites as ripe for both aesthetic and fundamental interpretation, changing not only the wallpaper, but turning them into white tiger playpens or environments for sleeping, for instance.</p>

 

 

<p>Nina Beier</p>



<p>

 

Currently based in Berlin and New York, Danish-born Nina Beier drills down to the socio-historical implications of objects which she re-contextualizes in unlikely settings. Oversized wine glasses contain materialized stock images permanently fixed in resin, wigs, and ties bought on Ebay are presented as images when they become sandwiched in frames, and car head rests in leather protrude from granite monoliths in her unexpected installations.</p>



 

<p>Jonas Lund</p>




 

<p>The art-as-commodity complex is never more apparent than in Jonas Lund's conceptual artworks. The Swedish artist explores notions of authorship and ownership, art production chains, market trends, and art flipping. In his project Flip City at Steve Turner Contemporary, Lund installed GPS tracking devices in 40 paintings and tracked their whereabouts, providing a visualization for the hotly debated investment practice in which young artist's work is bought low, manipulated, and sold high in the secondary market for a large profit unseen by the artist.</p>

 

 

<p>Ida Ekblad</p>




 

<p>Up-and-coming painter Ida Ekblad is Norway's fastest rising young star. Her expressionist paintings are inspired by a wide variety of art historical references, from Situationism and Abstract Expressionism to graffiti and cartoon, and her found-object sculptures assembled from urban detritus feel more playful and light than their material constituents. </p>

 

 

<p>Tal R</p>




 

<p>Tal R was born in Tel Aviv to a Danish mother and Czechoslovakian Jewish father and Holocaust survivor, though he and his family moved to Denmark when the artist was only a year old. The artist's split identity and self-described outsider status guided the young artist toward drawing as a means of escape. (His traditional Hebrew name also means "number" in Danish—often landing the artist on the butt end of childish jokes.) Now, the artist's painting, sculpture, collage, and installation reflect a celebratory but also sinister perspective. Using unconventional drawing materials like pigment crayons and rabbit-skin glue, Tal R paints fauvist colors and naïve forms reminiscent of fin de siècle Europe and the CoBrA avant-garde movement of the late 1940s.</p> 

 

 

<p>Tom of Finland</p>




 

<p>Beginning in the 1940s, Tom of Finland drew thousands of liberating images that depicted masculine, muscled men engrossed in acts of homoertoic desire, unapologetically appropriating some of homophobic straight culture's most virile and macho archetypes. Sailors, bikers, cops, lumberjacks, and cowboys are recast as confident enthusiasts of gay sex. These innovating portrayals of the male body, which circulated underground for years before gaining recognition in the art world, have become not only heralded for their deft skill and imagination, but credited with originating empowering queer iconography.</p>

 

 

<p>Hanna Liden</p>




 

<p>The darkly compelling photographs of Swedish-born artist Hanna Liden seem ritualistic, evoking the pagan ceremonies and witchcraft magic aestheticized by Scandinavian horror movies. Liden first arrived on the scene around 2005 with photographs of masked teenagers rambling through rural landscapes. Her more recent images illustrate the artist's daily consumption, representing common objects like black plastic bags from liquor stores, free matchbooks from bodegas, and bags of trash—ubiquitous in the New York City landscape the artist now inhabits.</p>

 

 

<p>Olafur Elíasson</p>




 

<p>Waterfalls appearing to fall out of the sky, bright green urban rivers, and setting indoor suns describe a few of the sublime artworks by Danish-Icelandic artist Olafur Elíasson that stop unsuspecting passers-by in their tracks. The artist is known for his sensational civic artworks that make the public renegotiate their relationship with their surroundings, and also for his intricate artist investigations of natural phenomena and human perception. With a large studio of roughly 80 employees, Elíasson is interested in the interplay between light, architectural space, and vision, leading to collaborative research and experimentation with various technicians, craftsmen, scientists, and designers for each of his projects. </p>

 

 

<p>Per Kirkeby</p>




 

<p>Formally trained as a geologist, Danish artist Per Kirkeby is best known for his drawings, prints, and oil paintings that mimic ecological forms. The artist has created an abstract lexicon by rendering environmental processes, using natural phenomena like the Earth's landscape or biological life as his inspiration. Regularly visiting uninhabited regions of Northern Europe, the arctic, Central America, and Australia, Kirkeby reinforces his connection to the wilderness.</p>

 

 

<p>Elmgreen & Dragset</p>




 

<p>Subversive wit and humor pervade the Scandinavian art duo Michael Elmgreen and Ingar Dragset's large-scale installations and public sculptures. Since 1994, when they met by chance at a Copenhagen bar, Elmgreen and Dragset have created collaborative work that evokes a distinct, dark humor while shedding light on serious social and cultural concerns. They're perhaps best known for the permanent installation Prada Marfa (2005), which they describe as a "pop architectural land art project," involving an installed a replica of a Prada boutique along a remote stretch of highway in Texas. </p>
          

           
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default BlogPage;