import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import ReviewCard from "../../../components/cards/ReviewCard";

const reviews = [
  {
    _id: "01",
    title: "Awesome Learning Experience!",
    description:
      "I highly recommend LinguaEase for foreign language learning. The teaching methods are engaging, and the instructors at LinguaEase are knowledgeable and friendly.",
    name: "John Smith",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    _id: "02",
    title: "Best Language School Ever!",
    description:
      "I can't say enough good things about LinguaEase, the best foreign language school ever. The curriculum is well-structured, and the classes at LinguaEase are interactive and fun.",
    name: "Emily Johnson",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    _id: "03",
    title: "Life-changing Experience!",
    description:
      "Enrolling in LinguaEase was the best decision I've made. The instructors at LinguaEase are passionate about teaching and go above and beyond to ensure every student succeeds.",
    name: "David Rodriguez",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const Review = () => {
  return (
    <div className="mt-28">
      <Container>
        <SectionTitle label="Our Happy Students" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Review;
