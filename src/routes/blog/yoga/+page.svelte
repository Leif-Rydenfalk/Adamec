<script>
    import { goto } from "$app/navigation";
    import { Image } from "$lib/components";
    import Button from "$lib/components/button/Button.svelte";
</script>

<h1>Yoga Basics: A Beginner’s Guide to the Practice</h1>

<section>
    <h2>Introduction</h2>

    <p>
        Yoga is more than just a workout; it’s a holistic approach to wellness
        that combines physical postures, breath control, meditation, and ethical
        living. Whether you’re looking to improve flexibility, reduce stress, or
        find a deeper connection to yourself, yoga offers something for
        everyone. In this beginner’s guide, we’ll explore the essentials to help
        you start your yoga journey.
    </p>

    <div class="h-[2rem]"></div>

    <Image
        style="w-[40%] h-[15rem] object-cover"
        src="https://cdn.pixabay.com/photo/2024/06/21/07/46/yoga-8843808_640.jpg"
    />

    <div class="h-[2rem]"></div>
</section>

<section>
    <h2>Types of Yoga</h2>
    <p>
        Understanding the different styles of yoga can help you find the one
        that suits your needs best:
    </p>
    <ul>
        <li>
            <Button
                delay={0.4}
                onClick={() => {
                    goto("yoga/types/hatha");
                }}
            >
                <strong>Hatha Yoga:</strong>
            </Button>
            Perfect for beginners, Hatha focuses on foundational postures and breath
            work, making it a gentle introduction to yoga.
        </li>
        <li>
            <Button delay={0.5} onClick={() => {}}>
                <strong>Vinyasa Yoga:</strong>
            </Button>
            This dynamic style links breath with movement, creating a flowing sequence
            of poses that can be both invigorating and meditative.
        </li>
        <li>
            <Button delay={0.6} onClick={() => {}}>
                <strong>Ashtanga Yoga:</strong>
            </Button>
            A more rigorous style that follows a set sequence of postures, Ashtanga
            is ideal for those looking for a structured practice.
        </li>
        <li>
            <Button delay={0.7} onClick={() => {}}>
                <strong>Iyengar Yoga:</strong>
            </Button>
            Emphasizing alignment and using props, Iyengar is great for anyone wanting
            to deepen their understanding of each pose.
        </li>
        <li>
            <Button delay={0.8} onClick={() => {}}>
                <strong>Yin Yoga:</strong>
            </Button>
            This slower-paced style involves holding poses for longer durations,
            allowing for deep stretching and relaxation.
        </li>
    </ul>
</section>

<section>
    <h2>Common Poses (Asanas)</h2>
    <p>
        Familiarizing yourself with some basic poses will enhance your practice:
    </p>
    <ul>
        <li>
            <Button
                delay={0.1}
                onClick={() => {
                    goto("yoga/postures/mountain");
                }}
            >
                <strong>Mountain Pose (Tadasana):</strong>
            </Button>
            This foundational standing pose helps improve posture and grounding.
        </li>
        <li>
            <Button delay={0.2} onClick={() => {}}>
                <strong>Downward Facing Dog (Adho Mukha Svanasana):</strong>
            </Button>
            A staple in many yoga classes, this pose stretches the entire body and
            invigorates the mind.
        </li>
        <li>
            <Button delay={0.3} onClick={() => {}}>
                <strong>Warrior I (Virabhadrasana I):</strong>
            </Button>
            Strengthens the legs and opens the hips while cultivating focus and determination.
        </li>
        <li>
            <Button delay={0.4} onClick={() => {}}>
                <strong>Child’s Pose (Balasana):</strong>
            </Button>
            A resting pose that encourages relaxation and introspection, perfect
            for taking a break during practice.
        </li>
        <li>
            <Button delay={0.5} onClick={() => {}}>
                <strong>Tree Pose (Vrksasana):</strong>
            </Button>
            Enhances balance and concentration while grounding you in the present
            moment.
        </li>
    </ul>
</section>

<section>
    <h2>Breathing Techniques (Pranayama)</h2>
    <p>
        Breath control is a vital part of yoga, known as pranayama. Here are a
        couple of techniques to explore:
    </p>
    <ul>
        <li>
            <Button delay={0.2} onClick={() => {}}>
                <strong>Ujjayi Breathing:</strong>
            </Button>
            Often called “ocean breath,” this technique involves a slight constriction
            of the throat, producing a soothing sound as you inhale and exhale.
        </li>
        <li>
            <Button delay={0.3} onClick={() => {}}>
                <strong>Nadi Shodhana (Alternate Nostril Breathing):</strong>
            </Button>
            A calming practice that balances the body’s energies by alternating the
            breath between nostrils.
        </li>
    </ul>
</section>

<section>
    <h2>Meditation and Mindfulness</h2>
    <p>
        Incorporating meditation into your yoga practice can enhance
        mindfulness:
    </p>
    <ul>
        <li>
            Start by sitting quietly, focusing solely on your breath for a few
            minutes.
        </li>
        <li>
            Gradually extend your meditation time as you become more comfortable
            with the practice.
        </li>
    </ul>
</section>

<section>
    <h2>Benefits of Yoga</h2>
    <p>Practicing yoga regularly offers a multitude of benefits:</p>
    <ul>
        <li>
            <Button delay={0.4} onClick={() => {}}>
                <strong>Improved Flexibility and Strength:</strong>
            </Button>
            Over time, you’ll notice increased range of motion and muscle tone.
        </li>
        <li>
            <Button delay={0.5} onClick={() => {}}>
                <strong>Reduced Stress and Anxiety:</strong>
            </Button>
            Yoga promotes relaxation and helps manage stress levels.
        </li>
        <li>
            <Button delay={0.6} onClick={() => {}}>
                <strong>Enhanced Mental Clarity:</strong>
            </Button>
            The mindfulness aspect of yoga improves focus and mental acuity.
        </li>
        <li>
            <Button delay={0.7} onClick={() => {}}>
                <strong>Overall Well-Being:</strong>
            </Button>
            Yoga nurtures not only the body but also the mind and spirit, contributing
            to a more balanced lifestyle.
        </li>
    </ul>
</section>

<section>
    <h2>Tips for Beginners</h2>
    <p>Here are some helpful tips as you embark on your yoga journey:</p>
    <ul>
        <li>
            <Button delay={0.2} onClick={() => {}}>
                <strong>Start with Beginner Classes:</strong>
            </Button>
            Look for classes specifically designed for newcomers or explore online
            tutorials.
        </li>
        <li>
            <Button delay={0.3} onClick={() => {}}>
                <strong>Listen to Your Body:</strong>
            </Button>
            Always honor your limits and avoid pushing into pain.
        </li>
        <li>
            <Button delay={0.4} onClick={() => {}}>
                <strong>Invest in a Good Mat:</strong>
            </Button>
            A quality yoga mat provides comfort and support, making your practice
            more enjoyable.
        </li>
        <li>
            <Button delay={0.5} onClick={() => {}}>
                <strong>Practice Regularly:</strong>
            </Button>
            Even a few minutes each day can significantly benefit your practice and
            overall well-being.
        </li>
    </ul>
</section>

<section>
    <h2>Conclusion</h2>
    <p>
        Yoga is a beautiful journey of self-discovery and growth. Whether you’re
        seeking physical fitness, mental clarity, or emotional balance, there’s
        a place for you on the mat. So roll out your mat, take a deep breath,
        and begin your exploration of yoga today! If you have any questions or
        need further guidance, feel free to reach out. Namaste!
    </p>
</section>
