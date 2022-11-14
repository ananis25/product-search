
## Problem to solve

PerfectRec is a website for online product recommendations. 

The idea of a (product-finder?) tool to help users make the optimal purchase is interesting. When shopping within a specific product category, you should be able to improve over the Amazon search UX. Even though the number of top performing products in a category isn't very large, the experience is terrible since shopping websites just dump all the information on you. 

## Bits I liked in PerfectRec

The user interface is pretty neat. When looking into products of the same kind (laptop/phone/etc), an adaptive questionnaire learns user intent better than a text query input. 

- Recommendation based on explicit product attributes rather than collaborative filtering 
  - Unlike consumables/clothes/media, the product attributes for a phone or laptop are ummm.. more _objective_? For ex, aesthetic of a particular sneakers line is sort of nebulous, so it needs to be modeled using aggregated shopping data. Say, clustering user profiles with similar purchases. Whereas, the utility of electronic purchases can be better decomposed into product specifications, like battery life and camera quality. 
  - Electronic purchases are expensive, so the cost of a sub-optimal recommendation is high. Also, people don't buy them very often, so I am curious how much signal can be derived from sparse purchase data. For ex, shopping search results over-index on popularity when ranking. 

- Serializable search state
  - People often seek recommendations from friends, so tracking user supplied responses as an attribute-value map makes sharing easy. However, I don't know if there is randomization/A-B testing involved since the ranked results will show up differently in that case. 
  - It also makes the recommendation engine interpretable by stating which preferences each product is compatible with (or not). This makes comparisons easier. 

- Incremental elicitation of user preferences
  - This is cool since long forms gets boring soon. Letting users browse the current best matches whle giving them the option to improve it by adding more details is neat. 

- Expert evaluation of catalog
  - This really depends on the quality of expert analysis. When done well, it ensures baseline quality of the products displayed and  reduces chance of a bad purchase. 
  - Scaling the quality of a product on important aspects, like camera quality or suitability for work, to a linear score, is also nice. 


## Existing Options for Product Recommendations

### Shopping websites

Considering an e-commerce platform like Amazon, they aren't incentivized to make the product search experience efficient. 
- For one, running a huge ads business alongside means the longer I hang around on the website, the more money they make. 
- Two, even a purchase made from a different product category than the user was originally looking into, still nets them revenue. 

The good bits are
- It is a storefront, so you have realtime information from suppliers on availability/price offers. 
- Going from selecting an item to purchasing it is a couple clicks. 
- Comparison tools and visibility of consumer reviews/ratings is also helpful. 
- The UX is not too bad, Amazon knows how to automatically generate facets to help narrow down your search. 

### Internet forums

Reddit is great for discussing preferences; people use subreddits like `r/PickAnAndroidForMe/` and `r/iPhone` to ask for recommendations. The interface is conversational and you get answers from real users about how the product actually worked for them. 

- The downside is comments coming from brands engaged in astroturfing, so you can't really trust them. 
- Another con is you don't really get structured information. It works for specific questions, say the user experience camera quality of the new iPhone. However, you lack a way to collate those answers and make a decision. 

### Aggregators

Aggregation websites like 91mobiles/GSMarena feel like the closest alternative to PerfectRec. They have the most comprehensive database of products, plus news on any upcoming launches or price changes that you could wait for. There is a lot more structure to product specifications and they let you filter on granular attributes. Expert reviews on the website also tell me what to look for in the next purchase. 

The lacking bit really is the search UX. You can set filters on everything, which while being great for customization, is not great for discovery. They also curate a large set of products, which might make the accuracy of their scores/recommendation suffer. 

### Physical retail

The upside is having a sales person to help you navigate the product; I don't think there can be a digital substitute for that. You can look at items one at a time, get a better feel for the product and incrementally adjust the specifications to your needs. 

The disadvantage is having a limited set of options and a sales person biased towards finalizing a sale. Further, considering variety in product specifications, and no automation to help through with it, you are likely to be left with buyer's regret. 


## Feature ideas

Thinking through ways to improve PerfectRec as a shopping assistant. 

- Incremental refinement
  - PerfectRec collects user preferences one at a time, however they apply together to the full catalog. 
  - We could let users pivot on an item that they like, like say, a Macbook Air when considering laptops. Then the interface could suggest similar items which trade off attributes (say, RAM for GPU memory) but within a small range. 

- Navigation friendliness
  - The current interface is a decision support tool though shopping often is more exploratory. People love browsing products they probably won't purchase, or discovering products they don't usually come across. 
  - Some poorly thought ideas
    - Add a widget showing the current set of preferences, similar to the `active filters` widget in traditional search UIs. The users can adjust or remove them. 
    - A `fork` button that branches off the current set of preferences to a new session, while adding the current session to a stack. Let users jump back and forth. 
    - Something like a _shopping bag_, that users can add items to and compare them all at once. Currently, the interface only lets you compare products with the _current_ set of preferences. 
    - Making the recommendation page shared by someone _editable_ so I could start off from the original, and tweak preferences to generate new recommendations. 
    - `Natural language input`? I know a questionnaire is better to start with, but given a set of recommendations, interaction with them could be made conversational. Say, asking if this particular phone is rugged, and the interface translating that to the relevant attribute (screen material?). 
    - Marking some preferences as `hard constraints`. Sometimes, I really only want to see phones with stock Android. Amazon search interface does provide this, but it is not guaranteed the necessary attribute shows up in the list of auto-generated facets. 

- Mixed initiative input
  - Users are often not familiar with the aspects to evaluate the product on. For instance, if I want to buy a suitable laptop for my parents, besides the price range, I don't really know what to pick. The questionnaire clarifies it to some degree, but it is difficult to anticipate every use case. 
  - The interaction is system (PerfectRec) initiated, and it can't go on forever since that gets tedious. 
  - I wonder if the preference elicitation could be made _continuous_. After the first few questions, the system could take a backseat and let the user go through the recommendations. There on, the users could tweak or add new preferences. Either looking for an attribute themselves, or picking one suggested by the system based on previous actions.  


## Technical problems to solve

The product-finder setting is like a decision support system. Per their description, PerfectRec seems to be a combo of a recommendation system and a search engine. 

- Reliable and fresh data
  - Maintaining a big catalog of products and tracking new releases. Given a big fraction of purchases happen around specific dates, like Black Friday, with a lot of flux in prices, how do you keep the algorithm tuned? 
  - Expert vetting of product specifications and scoring them on popular attributes. 
  - When setting up a new product catalog, what parts can be automated vs constructing the product ontology manually? 

- Preference modeling
  - Product preferences aren't monotonic, the same user could simultaneously like products with values for the same attribute. 
  - Tension between prompting the user for more input vs not interrupting them too often. 
  - Computing user utility as a linear sum of attribute weights vs more general learning to rank models? 
  - Making comparisons visual. 

- Choosing the optimization metric
  - How do you measure platform performance if the search session doesn't end with a purchase? Is the goal recommending what someone will buy, vs what they like? 
  - Length of search sessions could be a good metric, or say, the number of inputs a user had to provide. Though short sessions could equally mean the user quickly found what they were looking for, or that they got frustrated and left!  


## Things I am curious about

### Machine Learning

Curious how the founders think about it. To me, it feels like UX is a bigger component than making a better recommendation engine. 

A simple way to model the core ranking problem would be as a weighted MAX-SAT. 
- User preferences on product attributes are constraints. 
- Utility for an item is a weighted linear combination of its attributes' values. 
- The objective is to find the maximum utility over the catalog. 

### Growth

How do you get more people to use it?

#### SEO

- Is SEO helpful? Google results are dominated by listicles and product aggregators, for ex, "the best phones for older people". 
- The lacking bit about those lists is you can't refine them, I wonder if that could be an acquisition channel here! 
- Create PerfectRec sessions corresponding to common use cases, and make recommendation sets out of them. Let users branch off from there and tweak preferences to their needs.  


### Conversations
- People ask for recommendations on public forums like reddit or P2P chats. Could this be made easier? 
- Can you make small (maybe embeddable) tools that can be spinned up quickly to highlight the comparison they are making? Serializable search state should make it easy. 

### Revenue

The website lists auction ads as a possible monetization strategy. The closest model would be Amazon product ads, which they started in 2018. 

- How does allocation for auction ads work? (TODO)
- Finding relevant ads is a a lot easier compared to a shopping website since the user representation is more concrete. However, most relevant items are likely to show up in our recommendations anyway! There must be theory on how to balance both. 
- Attribution is straightforward though, either of views/clicks work. 
- Are there existing APIs or ad marketplaces you could directly plug into? A more refined version of Google Adsense? 
