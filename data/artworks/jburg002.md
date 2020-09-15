_Dreamspace_ is an exploration of our collective unconscious. Over a hundred-thousand dream journal entries were harvested from online sources. The text of these dreams were tokenised into words and phrases, then fed into a vectorisation algorithm, using one hundred dimensions. These vectors were then projected into 3D space, and from there a map to dreamspace was possible.

The work explores the patterns and coincidences of our dreams and invites us to question the Jungian ideas of a collective unconscious. Are we all dreaming the same dreams? 

The maps are a cartographic representation of the space. Each star representing a term or phrase curated from the vast cosmos of ideas, symbols and archetypes and each dream as a constellation connecting the stars which feature in the dream. They use a stereographic projection of both hemispheres with an axial a tilt of 51.5 degrees (the latitude of Goldsmiths). 

The labels around the dials use the months of French Revolutionary Calendar, alluding to ideas of [24/7 Late Capitalism and the Ends of Sleep](https://www.versobooks.com/books/1570-24-7) by _Jonathan Crary_ that sleep is an inherently anti-capitalist activity, where we neither create value nor are bounded by our material wealth.

Technical details:
Dream texts were scraped and tokenised using JavaScript. Word2Vec was used to create the vector space in 100 dimensions which was then reduced to 3 dimensions T-SNE through TensorFlow. The map projections use D3 and the prints were created using custom JavaScript to create HPGL for a Roland DPX-3300 plotter and SVG for laser cutting.