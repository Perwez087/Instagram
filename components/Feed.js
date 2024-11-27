import Posts from "./Posts";
import Stories from "./Stories";

const Feed = () => {
  return (
    <main className="max-w-2xl mx-auto">
      <section>
        {/* stories */}
        <Stories />
        {/* posts */}
        <Posts />
      </section>

      <section>
        {/* Mini Profile */}

        {/* Suggestion */}
      </section>
    </main>
  );
};

export default Feed;
