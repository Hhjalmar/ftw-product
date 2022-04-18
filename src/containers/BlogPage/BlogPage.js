
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
          <h3>Why beautiful things make us happy</h3>

            <p>A lot of things can be beautiful.

Landscapes, faces, fine art, or epic architecture; stars in the sky.

Or simply the reflection of the sun on an empty bottle.

Beauty is nothing tangible, it only exists in our heads as a pleasant feeling.

If we have to define it, we perceive something as beautiful if its color, shape, form, or proportion

somehow are appealing or delightful to us.

Beauty is a very human experience that's been with us for millions of years.

Even our first tools were trimmed to a symmetrical shape.

Researchers have tried to find practical reasons why our ancestors invested the time to make their tools look nice, but couldn't really identify any.

It seems that early humans shaped their tools into teardrops, simply because they liked them better that way.

Throughout our history, the definition of beauty has changed a lot.

Ideals have shifted or turned into their opposites.

But beyond individual and contemporary tastes some things have never really gone out of fashion.

The golden ratio, symmetry, or fractal patterns can be found in the art and architecture of cultures from our beginnings, to today.

Humans seem to be in mysterious, inherent agreement about the beauty of certain things.

The patterns that keep coming up are all rooted in nature.

They became part of our biology because they helped our ancestors survive.

Fractal patterns for example, occur all over nature.

In snail shells, flower heads; waves or clouds

Identifying and assessing these things and phenomena correctly used to be vital.

Do those clouds mean rain will come soon? Are these waters safe to swim through? Can I eat this?

Another pervasive thing is symmetry.

In nature it means everything is as it should be

Stems and trees and leaves and blossoms all grow symmetrically

A deer with impressive antlers is probably a source of nutritious meat.

A deformed wheat hair may not be safe to eat.

A symmetrical face is more likely to belong to a healthy and fertile mating partner.

Because symmetry is so common in fauna and flora, it's extremely familiar to our brain.

It helped our ancestors evaluate their environment more easily, and react quickly to danger.

Things that helped us survive activate the reward center in our brain.

recognising signals of safety and nutrition, triggered nice feelings in us.

So our sense of beauty probably evolved from pattern recognition, but it goes way beyond that now.

Humans seem to have evolved an instinct for beauty that is deeply hardwired into us.

It remain even after other processes in our brain stop working.

Alzheimer's patients were asked to rank the beauty of several paintings

Then the experiment was repeated two weeks later

The patients have long since forgotten the paintings, but still ranked the beauty of the paintings in the same order.

One could argue that this doesn't say much. So what if people stick to their personal preferences?

But other research has shown that we have a sort of lowest common denominator when it comes to beauty.

In different experiments, people were asked to distinguish real from fake abstract paintings.

Some were originals by Mondrian and Pollock that were painted based on strict rules like fractal patterns, while the imitations were not.

The majority picked out the original artworks.

This worked for paintings from both artists, even though their arts are very different.

Another experiment also used abstract artworks but, asked people to pick them out among similar paintings made either by children or animals.

Again, the test subjects pointed out the legit paintings whose patterns were carefully planned and not random

So while we have a hard time pinning down what beauty is or what it's based on, we somehow recognize it when we see it

Humans don't navigate nature trying to survive day by day anymore

We left the natural world behind and created our own.

We made the objects that surround us the things we wear and use and look at.

As we spread over the planet and our numbers grew, we shaped a completely man-made environment.

In the process of doing so, we often neglected beauty in favor of functionality cost or efficiency.

We built rows and rows of concrete housing blocks that nobody wants to live in.

We have ugly underground subway stations, shabby public service buildings, and sprawling malls.

One bland, standardized box beside the next.

Humans, don't like monotony.

Eye tracking software has shown that people keep focusing on details and ornaments of architecture while brushing quickly over blank walls

And not only are they no fun to look at, they actually make us miserable.

Experiments with skin sensors showed that looking at vast, dull facades makes us feel bored and uncomfortable.

This kind of boredom has been linked to raised heart rates and stress levels and the opposite seems to be true, too.

Over the last decades more and more studies have found that surroundings that are actually aesthetically pleasing to us can improve our well-being, our behavior,

cognitive function, and mood.

Our bodies and brains react measurably and visibly to everything that surrounds us

Beauty in particular has such a strong impact on our well-being that making useful things beautiful can actually make them better.

In 2017, a hospital examined recovery factors through observation and interviews with patients and found that visual art in their lounge areas

made them more comfortable and happier about their stay in general.

Another study looked at how well patients recovered in a hospital that had two wards.

A very old and rather ugly one, and a newly renovated ward.

To the researchers' surprise, the patients that stayed in the new, renovated environment, needed less pain medication

and were released on average, two days earlier than patients recovering in the old ward.

More beautiful surroundings made them feel better, physically.

Beauty also has an effect on us on a daily basis.

It can improve our general happiness.

A study that looked at the main factors influencing the happiness of adults revealed an unexpected result.

Besides things like good health in a harmonious family life, individual happiness is affected by how beautiful you find the city you live in.

Beauty scored even higher than cleanliness or safety.

So what can we learn from all of this?

We know that we humans have been fine-tuned for millions of years to process visual input and assess our surroundings.

It's just what we're programmed to do and we're starting to learn more about how much beauty as a property is really influencing us.

Beauty meets an inherent need for meaningful information.

Maybe it would be worth giving it more space in this man-made world we have created.</p>
        

           
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