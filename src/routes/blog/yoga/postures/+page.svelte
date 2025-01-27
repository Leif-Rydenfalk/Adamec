<script>
    import { goto } from "$app/navigation";
    import Button from "$lib/components/button/Button.svelte";
</script>

<h1>Top 10 Yoga Postures and Their Benefits</h1>

<p>
    Yoga is a holistic practice that integrates mind, body, and spirit, and its
    various postures (asanas) serve as tools to enhance physical health and
    mental clarity. Each yoga posture has its unique benefits, targeting
    different areas of the body and contributing to overall well-being. In this
    blog, we’ll explore several popular yoga postures and their specific
    advantages.
</p>

<section>
    <Button
        delay={0.1}
        onClick={() => {
            goto("postures/mountain");
        }}
    >
        <h2>1. Mountain Pose (Tadasana)</h2>
    </Button>

    <ul>
        <li>
            <strong>Improves Posture:</strong> Promotes proper spinal alignment and
            reduces tension in the back.
        </li>
        <li>
            <strong>Enhances Balance:</strong> Encourages stability and grounding,
            preparing you for other postures.
        </li>
        <li>
            <strong>Increases Body Awareness:</strong> Helps you connect with your
            body and breath.
        </li>
    </ul>
</section>

<section>
    <Button
        delay={0.2}
        onClick={() => {
            goto("postures/mountain");
        }}
    >
        <h2>2. Downward-Facing Dog (Adho Mukha Svanasana)</h2>
    </Button>

    <ul>
        <li>
            <strong>Stretches the Entire Body:</strong> Offers a full-body stretch,
            particularly in the shoulders, hamstrings, and calves.
        </li>
        <li>
            <strong>Strengthens the Arms and Legs:</strong> Engages the muscles in
            your arms and legs, building strength.
        </li>
        <li>
            <strong>Relieves Stress:</strong> The inversion encourages blood flow
            to the brain, helping to alleviate anxiety.
        </li>
    </ul>
</section>

<section>
    <Button
        delay={0.3}
        onClick={() => {
            goto("postures/mountain");
        }}
    >
        <h2>3. Warrior I (Virabhadrasana I)</h2>
    </Button>

    <ul>
        <li>
            <strong>Builds Strength:</strong> Strengthens the legs, core, and arms
            while improving stamina.
        </li>
        <li>
            <strong>Enhances Focus:</strong> Encourages concentration and determination.
        </li>
        <li>
            <strong>Opens the Hips and Chest:</strong> Increases flexibility in the
            hips and expands the chest for deeper breathing.
        </li>
    </ul>
</section>

<section>
    <Button
        delay={0.1}
        onClick={() => {
            goto("postures/mountain");
        }}
    >
        <h2>4. Warrior II (Virabhadrasana II)</h2>
    </Button>

    <ul>
        <li>
            <strong>Improves Endurance:</strong> Challenges balance and stability,
            building resilience.
        </li>
        <li>
            <strong>Stimulates Circulation:</strong> Encourages blood flow throughout
            the body.
        </li>
        <li>
            <strong>Enhances Core Strength:</strong> Engages the core muscles, supporting
            better posture.
        </li>
    </ul>
</section>

<section>
    <Button
        delay={0.2}
        onClick={() => {
            goto("postures/mountain");
        }}
    >
        <h2>5. Tree Pose (Vrksasana)</h2>
    </Button>

    <ul>
        <li>
            <strong>Enhances Balance:</strong> Improves stability and coordination.
        </li>
        <li>
            <strong>Strengthens the Legs:</strong> Engages the standing leg, developing
            strength in the feet and legs.
        </li>
        <li>
            <strong>Promotes Focus:</strong> Encourages mental concentration and
            calmness.
        </li>
    </ul>
</section>

<section>
    <Button
        delay={0.3}
        onClick={() => {
            goto("postures/mountain");
        }}
    >
        <h2>6. Child’s Pose (Balasana)</h2>
    </Button>

    <ul>
        <li>
            <strong>Promotes Relaxation:</strong> A restorative pose that calms the
            mind and body.
        </li>
        <li>
            <strong>Stretches the Back:</strong> Relieves tension in the spine and
            promotes flexibility.
        </li>
        <li>
            <strong>Soothes the Nervous System:</strong> Provides a sense of grounding
            and security, reducing stress.
        </li>
    </ul>
</section>

<section>
    <Button
        delay={0.1}
        onClick={() => {
            goto("postures/mountain");
        }}
    >
        <h2>7. Bridge Pose (Setu Bandhasana)</h2>
    </Button>

    <ul>
        <li>
            <strong>Strengthens the Back and Legs:</strong> Engages the glutes and
            hamstrings while promoting spinal strength.
        </li>
        <li>
            <strong>Opens the Chest:</strong> Expands the chest and shoulders, improving
            breathing.
        </li>
        <li>
            <strong>Relieves Stress and Anxiety:</strong> Encourages relaxation and
            reduces tension.
        </li>
    </ul>
</section>

<section>
    <Button
        delay={0.2}
        onClick={() => {
            goto("postures/mountain");
        }}
    >
        <h2>8. Cobra Pose (Bhujangasana)</h2>
    </Button>

    <ul>
        <li>
            <strong>Strengthens the Spine:</strong> Promotes flexibility and strength
            in the back muscles.
        </li>
        <li>
            <strong>Stretches the Chest and Shoulders:</strong> Opens up the front
            body, improving posture.
        </li>
        <li>
            <strong>Energizes the Body:</strong> Encourages a sense of vitality and
            energy.
        </li>
    </ul>
</section>

<section>
    <Button
        delay={0.3}
        onClick={() => {
            goto("postures/mountain");
        }}
    >
        <h2>9. Seated Forward Bend (Paschimottanasana)</h2>
    </Button>

    <ul>
        <li>
            <strong>Stretches the Spine and Hamstrings:</strong> Provides a deep
            stretch to the back and legs.
        </li>
        <li>
            <strong>Calms the Mind:</strong> Aids in reducing stress and anxiety
            through gentle forward folding.
        </li>
        <li>
            <strong>Improves Digestion:</strong> Stimulates the digestive organs
            for better function.
        </li>
    </ul>
</section>

<section>
    <Button
        delay={0.1}
        onClick={() => {
            goto("postures/mountain");
        }}
    >
        <h2>10. Corpse Pose (Savasana)</h2>
    </Button>

    <ul>
        <li>
            <strong>Promotes Deep Relaxation:</strong> Encourages complete relaxation
            and rest for the body and mind.
        </li>
        <li>
            <strong>Reduces Stress:</strong> Calms the nervous system, helping to
            alleviate anxiety.
        </li>
        <li>
            <strong>Enhances Self-Awareness:</strong> Offers a moment for reflection
            and mindfulness at the end of practice.
        </li>
    </ul>
</section>

<section>
    <h2>Conclusion</h2>
    <p>
        The diversity of yoga postures allows practitioners to explore a range
        of physical and mental benefits. Whether you're looking to build
        strength, increase flexibility, or find inner peace, there is a posture
        that can help you on your journey. As you incorporate these poses into
        your practice, pay attention to how each one affects your body and mind,
        and enjoy the holistic benefits that yoga offers. Remember, consistency
        is key, and every pose is a step toward greater health and well-being!
    </p>
</section>
