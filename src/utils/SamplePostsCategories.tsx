import { Fragment } from "react";

export const deanCategories = [
  {
    categoryName: "Technical posts",
    note: "These posts are created with very little context for now",
    posts: [
      {
        id: "technical-post-1",
        content: (
          <Fragment>
            <p>
              ML is just software — until you try to version a 200GB dataset in
              Git. That’s where the fantasy ends.
            </p>

            <p>
              You don’t need MLOps tools with fancy dashboards. You need DVC —
              because Git wasn’t built for data. And data moves.
            </p>

            <p>Here’s what DVC actually gives you:</p>

            <p>
              🧱 <strong>Hash-based content tracking</strong>
            </p>
            <p>MD5 checksums on data and pipeline outputs</p>
            <p>
              Changes are content-aware, not timestamp-based (no Makefile
              stupidity)
            </p>
            <p>
              Efficient reuse of cached stages across branches and experiments
            </p>

            <p>
              📁 <strong>Data decoupled from Git</strong>
            </p>
            <p>
              .dvc files act as references — the real data lives in your remote
              (S3, GCS, Azure, SSH, doesn’t matter)
            </p>
            <p>Git only tracks the manifest, not the payload</p>
            <p>
              You can version 5TB of training data without Git LFS limits or
              garbage commits
            </p>

            <p>
              📊 <strong>Pipelines are DAGs</strong>
            </p>
            <p>
              <code>dvc.yaml</code> defines stages, dependencies, outputs
            </p>
            <p>All stages are deterministic</p>
            <p>
              Parallelizable with <code>dvc repro</code>
            </p>
            <p>
              Visualized with <code>dvc dag</code> — not a toy, an actual
              traceable graph
            </p>

            <p>
              🔁 <strong>Reproducibility is enforced, not hoped for</strong>
            </p>
            <p>Each stage is checksum-validated</p>
            <p>If the inputs didn’t change, the step won’t re-run</p>
            <p>If anything changed, only downstream nodes re-run</p>
            <p>No more “why did it retrain?” Slack threads</p>

            <p>
              🌲 <strong>No server. No UI. No lock-in.</strong>
            </p>
            <p>Runs on POSIX</p>
            <p>Works with Python, R, Julia, Bash, you name it</p>
            <p>Bring your own infra — or run it on a laptop</p>

            <p>This isn’t a notebook hack.</p>
            <p>
              This is a CI-native, Git-native, pipeline-native way to ship
              reproducible ML.
            </p>

            <p>If your data isn’t tracked, your pipeline isn’t real.</p>
            <p>If your model can’t be re-run, your results don’t matter.</p>

            <p>
              <strong>Stop guessing. Use DVC.</strong>
            </p>

            <p>
              #MLInfra #DVC #GitForData #NoFluff #Reproducibility #DeanStyle
              #DataOps #BuildLikeSoftware
            </p>
          </Fragment>
        ),
      },
      {
        id: "technical-post-2",
        content: (
          <Fragment>
            <p>
              Multimodal annotation isn’t labeling. It’s temporal, structural,
              and semantic synchronization across entropic data domains.
            </p>
            <p>
              If your pipeline can’t track provenance, alignment, and
              modality-specific schema enforcement, it’s not a pipeline — it’s
              an art project.
            </p>

            <p>
              <strong>Technical breakdown of what’s actually required:</strong>
            </p>

            <p>
              🧩 <strong>Data ingestion & alignment</strong>
            </p>
            <p>
              Syncing frames (image/video) to tokenized audio/text with
              sub-100ms accuracy
            </p>
            <p>
              Handling variable-length inputs (audio windows ≠ text sequences ≠
              frame counts)
            </p>
            <p>
              Timestamp normalization: POSIX time, UTC, video frame indexing,
              all cross-validated
            </p>

            <p>
              🧹 <strong>Preprocessing</strong>
            </p>
            <p>
              Normalize image resolutions, audio sample rates, language
              encodings
            </p>
            <p>
              Handle sparse modality presence (e.g. missing captions or desynced
              mic tracks)
            </p>
            <p>
              Temporal interpolation for misaligned modalities (e.g. missing
              frames in LiDAR or GPS dropout)
            </p>

            <p>
              🛠️ <strong>Annotation architecture</strong>
            </p>
            <p>
              Tooling must support bounding boxes, polygons, transcription,
              speaker IDs, event tagging — all aligned
            </p>
            <p>
              Label schemas must resolve to unified entity classes, not isolated
              modal tags
            </p>
            <p>
              Provenance required: who labeled, when, what model assisted, what
              confidence
            </p>

            <p>
              🔁 <strong>Human-in-the-loop augmentation</strong>
            </p>
            <p>Run weak models to pre-label easy data</p>
            <p>
              Route ambiguous slices (low prediction confidence, high entropy)
              to annotators
            </p>
            <p>
              Log model-assist ratio per label type to track where humans still
              outperform
            </p>

            <p>
              📈 <strong>Quality control</strong>
            </p>
            <p>
              Cross-modal consistency checks (e.g. “captioned object must exist
              in image bounding boxes”)
            </p>
            <p>
              Multi-rater agreement scoring (Cohen's Kappa or Krippendorff's
              alpha per segment)
            </p>
            <p>
              Regression detection: catch labeling drift caused by stale
              model-based pre-annotation
            </p>

            <p>
              ⚙️ <strong>Pipelining & versioning</strong>
            </p>
            <p>DAG-style data pipelines defined in YAML or Airflow</p>
            <p>
              Dataset hashes must reflect every label, metadata edit, and
              modality update
            </p>
            <p>
              Semantic versioning: v3.1 might fix label alignment between audio
              and captions only
            </p>

            <p>
              🧪 <strong>Evaluation-ready output</strong>
            </p>
            <p>One manifest per data point containing:</p>
            <ul>
              <li>image/ + bbox.json</li>
              <li>audio.wav + transcript.vtt + speaker_map.json</li>
              <li>text_input.txt + labels.json</li>
              <li>Unified metadata.yaml</li>
            </ul>

            <p>
              Multimodal AI doesn’t fail loudly. It fails by learning the wrong
              thing.
            </p>
            <p>
              - If your annotations are misaligned, your model encodes error as
              truth.
            </p>
            <p>
              - If your labels drift and you don’t version them, your training
              data is compromised.
            </p>
            <p>
              - If you can’t trace label origin, you have no audit path. You
              can’t debug. You can’t trust outputs.
            </p>

            <p>You don’t have training data.</p>
            <p>You have noise that compiles.</p>

            <p>This isn’t data ops. It’s fault-tolerant pipeline design.</p>

            <p>
              And if you miss one annotation contract, the model won’t break —
              it’ll converge on the wrong function. Quietly.
            </p>
          </Fragment>
        ),
      },
    ],
    whyBox: {
      heading: "Why the above posts?",
      points: [
        "Since Dean’s team works on training infrastructure and handling large datasets, this is exactly the kind of tool in industry that solves real pain. Industry constantly deal with reproducibility issues — and DVC helps to build pipelines that actually hold up at scale.",
        "Dean works on projects that combine video, audio, and text, and annotation has always been where things quietly break. This piece is practical for us because it shows how to structure pipelines properly, label stuff, it's the kind of system thinking our audience needs too.",
      ],
    },
  },
  {
    categoryName: "Industry Trends",
    note: "These posts are created with very little context for now",
    posts: [
      {
        id: "industry-post-1",
        content: (
          <Fragment>
            <p>
              <strong>
                MIT’s model links frames to sounds — no human input to train AI
              </strong>
            </p>

            <p>AI just got a little closer to how humans process the world.</p>

            <p>
              MIT trained a model to match what’s seen with what’s heard — no
              manual labels, no supervision. Just raw video and audio, frame by
              frame.
            </p>

            <p>The key wasn’t more data. It was better structure.</p>

            <p>
              They split audio into smaller windows, aligned each one to the
              corresponding frame, and balanced contrastive vs. reconstructive
              learning with dedicated tokens for each. The result? Clean
              audio-visual alignment without needing complex architectures or
              scale.
            </p>

            <p>One frame. One sound. No guessing.</p>

            <p>
              For teams working on multimodal AI — especially with vision,
              audio, or LLM inputs — this isn’t just an academic win. It’s a
              signal. Tight alignment between data types is possible, and you
              don’t need to trade off traceability or simplicity to get there.
            </p>

            <p>
              Most ML stacks still can’t version audio alongside video, or link
              events back to raw inputs.
            </p>

            <p>
              But as this kind of work becomes standard, that won’t be optional
              anymore.
            </p>
          </Fragment>
        ),
      },
      {
        id: "industry-post-2",
        content: (
          <Fragment>
            <p>Synthetic data isn’t the solution. It’s a placeholder.</p>

            <p>
              As AI adoption grows, especially in data-scarce or privacy-heavy
              industries, synthetic data has become the go-to workaround. From
              regional speech to financial transactions, we now generate what we
              can’t access. It’s fast, compliant, and scalable — on paper.
            </p>

            <p>
              But real-world data doesn’t behave like a clean dataset. It’s
              unpredictable. It contradicts itself. It reflects messy edge cases
              no simulation can fully replicate.
            </p>

            <p>That’s where synthetic data hits its ceiling.</p>

            <p>
              Yes, GANs, VAEs, and LLMs can simulate user behavior, create
              pseudo-medical records, or fill in multilingual gaps. But training
              models solely on synthetic data introduces risk: oversimplified
              patterns, blind spots in logic, and failure at the edge.
              Especially in markets like India — with linguistic complexity,
              layered behaviors, and non-linear digital footprints — synthetic
              data without real context just doesn’t hold.
            </p>

            <p>
              Add to that the compute cost, the tuning complexity, and the
              reality that most synthetic datasets inherit bias from the real
              ones they’re modeled on — and it’s clear: this isn’t
              plug-and-play.
            </p>

            <p>
              <strong>
                The best use case for synthetic data?
                <br />
                Fill the gaps, don’t replace the map.
              </strong>
            </p>

            <p>
              If you’re training models for high-risk domains — healthcare,
              finance, education — synthetic data won’t save you from regulatory
              scrutiny or production surprises. It can’t generate nuance. It
              doesn’t capture contradiction. It won’t teach your model how real
              people behave under stress, urgency, or uncertainty.
            </p>

            <p>
              <strong>
                It’s a tool, not a foundation.
                <br />
                Use it with intention. Use it with caution. And never stop
                validating against reality.
              </strong>
            </p>
          </Fragment>
        ),
      },
    ],
    whyBox: {
      heading: "Why the above posts?",
      points: [
        "Since Dean works closely with ML training and data pipelines, this felt fresh — something new in how we align audio and visuals without labels. What MIT's doing here really shifts how we think about self-supervised learning.",
        "Chose this because it ties directly to the kind of ML systems Dean’s team builds — data-constrained, privacy-bound, high-risk. Synthetic data is everywhere now, but most teams are using it without understanding where it breaks — this post calls that out.",
      ],
    },
  },
  {
    categoryName: "General Post",
    note: "These posts are created with very little context for now",
    posts: [
      {
        id: "general-post-1",
        content: (
          <Fragment>
            <p>
              <strong>Most AI systems don’t fail because of the model.</strong>
            </p>

            <p>
              They fail because the data doesn’t represent the people it's
              supposed to serve. That’s not just a fairness issue — it’s an
              architecture problem.
            </p>

            <p>We train LLMs on languages most of the world doesn’t speak.</p>
            <p>We deploy vision models in regions they’ve never seen.</p>
            <p>
              We build pipelines assuming everyone’s already connected — 2.6
              billion people aren’t.
            </p>

            <p>The infrastructure gap shows up everywhere:</p>
            <ul>
              <li>Missing data from entire regions</li>
              <li>Fragmented governance</li>
              <li>Legacy systems that can’t scale securely or locally</li>
            </ul>

            <p>
              It’s simple:
              <br />
              No access → no data
              <br />
              No data → no representation
              <br />
              No representation → no inclusion
            </p>

            <p>
              Fixing it means starting where most AI conversations don’t:
              <br />
              Data access. Interoperability. Contextual relevance.
              <br />
              That’s where inclusive AI begins — not with the model, but with
              the architecture underneath it.
            </p>

            <p>
              <strong>
                Inclusion doesn’t get solved at the application layer.
              </strong>
              <br />
              It’s a design decision baked into how data moves, how it’s
              governed, and who it includes by default.
            </p>
          </Fragment>
        ),
      },
      {
        id: "general-post-2",
        content: (
          <Fragment>
            <p>Synthetic data isn’t the solution. It’s a placeholder.</p>

            <p>
              As AI adoption grows, especially in data-scarce or privacy-heavy
              industries, synthetic data has become the go-to workaround. From
              regional speech to financial transactions, we now generate what we
              can’t access. It’s fast, compliant, and scalable — on paper.
            </p>

            <p>
              But real-world data doesn’t behave like a clean dataset. It’s
              unpredictable. It contradicts itself. It reflects messy edge cases
              no simulation can fully replicate.
            </p>

            <p>That’s where synthetic data hits its ceiling.</p>

            <p>
              Yes, GANs, VAEs, and LLMs can simulate user behavior, create
              pseudo-medical records, or fill in multilingual gaps. But training
              models solely on synthetic data introduces risk: oversimplified
              patterns, blind spots in logic, and failure at the edge.
              Especially in markets like India — with linguistic complexity,
              layered behaviors, and non-linear digital footprints — synthetic
              data without real context just doesn’t hold.
            </p>

            <p>
              Add to that the compute cost, the tuning complexity, and the
              reality that most synthetic datasets inherit bias from the real
              ones they’re modeled on — and it’s clear: this isn’t
              plug-and-play.
            </p>

            <p>
              The best use case for synthetic data?
              <br />
              Fill the gaps, don’t replace the map.
            </p>

            <p>
              If you’re training models for high-risk domains — healthcare,
              finance, education — synthetic data won’t save you from regulatory
              scrutiny or production surprises. It can’t generate nuance. It
              doesn’t capture contradiction. It won’t teach your model how real
              people behave under stress, urgency, or uncertainty.
            </p>

            <p>
              It’s a tool, not a foundation.
              <br />
              Use it with intention. Use it with caution. And never stop
              validating against reality.
            </p>
          </Fragment>
        ),
      },
    ],
    whyBox: {
      heading: "Why the above posts?",
      points: [
        "Dean’s been hands-on with data systems, so the idea that inclusion starts at the architecture layer, not the model, just makes sense. This one stood out because it's not talked about enough in real ML workflows.",
        "Chose this because it ties directly to the kind of ML systems Dean’s team builds — data-constrained, privacy-bound, high-risk. Synthetic data is everywhere now, but most teams are using it without understanding where it breaks — this post calls that out.",
      ],
    },
  },
];

export const lawrenceCategories = [
  {
    categoryName: "Technical posts",
    note: "These posts are created with very little context for now",
    posts: [
      {
        id: "technical-post-1",
        content: (
          <Fragment>
            <p>
              When we first started building Ambient, I got a lot of questions
              like:
            </p>

            <p>“Will AI replace the Chief of Staff?”</p>

            <p>My answer is simple: No. It will amplify them.</p>

            <p>
              In a world of endless meetings, Slack chaos, and fragmented
              knowledge, a great Chief of Staff is already a force multiplier
              for the CEO. But imagine giving that CoS:
            </p>

            <p>Instant access to any decision ever made</p>
            <p>A memory of every meeting, summary, and action</p>
            <p>Contextual search across 100+ stakeholders</p>
            <p>Nudges before key decisions fall through the cracks</p>

            <p>
              That’s not replacing the CoS. That’s weaponizing their leverage.
            </p>

            <p>
              The best executives today are not asking:
              <br />
              “What can AI do for me?”
            </p>

            <p>
              They’re asking:
              <br />
              “How do I scale my most strategic people using AI?”
            </p>

            <p>
              We built Ambient for exactly that. Not to replace.
              <br />
              To multiply.
            </p>

            <p>
              And based on the early enterprise results, that bet is paying off.
            </p>

            <p>
              If you're a Chief of Staff—or manage one—I'd love to hear how
              you're thinking about AI in your workflow.
            </p>
          </Fragment>
        ),
      },
      {
        id: "technical-post-2",
        content: (
          <Fragment>
            <p>
              Recent IDC research reveals a striking disparity in enterprise AI
              adoption: while 89% of organizations have revamped their data
              strategies to embrace Generative AI, only 26% have successfully
              deployed these solutions at scale.
            </p>

            <p>
              This gap underscores a critical challenge: the transition from AI
              ambition to execution is fraught with obstacles.
            </p>

            <p>
              At Ambient.ai, we've identified key factors contributing to
              successful AI deployment:
            </p>

            <p>
              <strong>Contextual Understanding:</strong> AI systems must grasp
              the nuanced context of enterprise operations, not just process
              isolated data points.
            </p>

            <p>
              <strong>Integrated Data Ecosystems:</strong> Seamless integration
              across various data sources ensures AI models have access to
              comprehensive information, enhancing decision-making capabilities.
            </p>

            <p>
              <strong>Robust Infrastructure:</strong> A flexible and scalable
              infrastructure is essential to support AI workloads and facilitate
              real-time analytics.
            </p>

            <p>
              By focusing on these areas, we've enabled organizations to move
              beyond pilot programs, achieving tangible ROI from their AI
              investments.
            </p>

            <p>
              I'm curious to hear from others: What strategies have you found
              effective in translating AI initiatives from concept to reality?
            </p>
          </Fragment>
        ),
      },
    ],
    whyBox: {
      heading: "Why the above posts?",
      summary:
        "Why These are Great Fit for Lawrence - These posts are technical, shows our strong points while addressing real issues",
      points: [
        "Founder-POV: Speaks directly from his journey building Ambient.",
        "Audience-relevant: Focuses on CoS, his exact ICP (Ideal Customer Profile).",
        "Non-generic: Doesn’t repeat tired “AI will replace jobs” tropes—instead, it reframes the debate.",
        "Engagement-friendly: Ends with a real call for response, not a vague CTA.",
        "Educates + positions Ambient as a category-definer without sounding salesy.",
        "Data-Driven Insight: Cites specific, recent IDC findings to highlight the prevalent challenge in AI deployment.",
        "Thought Leadership: Positions Ambient.ai as a solution-oriented leader addressing real-world enterprise AI challenges.",
      ],
    },
  },
  {
    categoryName: "Industry Trends",
    note: "These posts are created with very little context for now",
    posts: [
      {
        id: "industry-post-1",
        content: (
          <Fragment>
            <p>
              Everyone talks about the AI stack like it’s one clean layer. One
              foundation model. One orchestration layer. One interface.
            </p>

            <p>But here’s what we’re actually seeing in the field:</p>

            <p>The stack is splitting into two very different paths:</p>

            <p>
              <strong>Horizontal AI</strong> — general-purpose, built for
              breadth: summarize anything, chat with anything, integrate with
              everything
            </p>

            <p>
              <strong>Vertical AI</strong> — narrow, domain-specific systems
              that understand actual workflows and decision chains inside a
              function or role
            </p>

            <p>
              The big vendors are betting on horizontal. But if you’ve ever sat
              in a Chief of Staff sync or a revenue ops meeting, you know:
            </p>

            <p>Insight isn’t the bottleneck. Context is.</p>

            <p>
              The tools that will win in the enterprise aren’t the ones that
              answer faster. They’re the ones that understand how decisions are
              made, delayed, forgotten, or resurfaced over time.
            </p>

            <p>
              You don’t fix that with a horizontal tool. You need to go deep.
            </p>

            <p>
              The future isn’t “AI for everything.” It’s “AI that understands
              this thing better than any human ever could.”
            </p>
          </Fragment>
        ),
      },
      {
        id: "industry-post-2",
        content: (
          <Fragment>
            <p>The AI world is obsessed with performance benchmarks:</p>

            <p>“Which LLM are you using?”</p>

            <p>“Is your system built on GPT-4, Claude, or Mixtral?”</p>

            <p>“How’s your RAG setup?”</p>

            <p>All valid questions.</p>

            <p>
              But none of them explain why most enterprise AI tools get ignored
              after week two.
            </p>

            <p>Because here’s the truth no one likes to say:</p>

            <p>
              <strong>Accuracy isn’t adoption. Behavior is.</strong>
            </p>

            <p>
              It doesn’t matter if your AI nails the perfect answer—
              <br />
              If that insight doesn’t change the calendar,
              <br />
              Or assign a new owner,
              <br />
              Or shift the next conversation…
            </p>

            <p>Then nothing changed.</p>

            <p>And if nothing changes, what was the point?</p>

            <p>We’ve seen this up close while building Ambient:</p>

            <p>
              AI that just "responds" becomes another inbox.
              <br />
              AI that changes how the team behaves becomes part of the operating
              system.
            </p>

            <p>
              The real ROI doesn’t come from what the AI said.
              <br />
              It comes from what people did differently because of it.
            </p>

            <p>
              That’s the difference between information and infrastructure—
              <br />
              And it’s the line most AI tools are still failing to cross.
            </p>
          </Fragment>
        ),
      },
    ],
    whyBox: {
      heading: "Why the above posts?",
      points: [
        "Challenge superficial AI narratives – Both posts debunk surface-level thinking around model choice and performance, positioning Lawrence as someone who sees deeper.",
        "Align with Ambient’s category-defining mission – They spotlight gaps in current enterprise AI adoption that Ambient is uniquely built to solve.",
        "Resonate with buyers and operators – These posts speak directly to execs, Chiefs of Staff, and enterprise leaders who are tired of AI hype and want real impact.",
        "Establish thought leadership – Instead of product-selling, Lawrence is shaping the frameworks others will use to evaluate AI tools in 2025 and beyond.",
      ],
    },
  },
  {
    categoryName: "General Post",
    note: "These posts are created with very little context for now",
    posts: [
      {
        id: "general-post-1",
        content: (
          <Fragment>
            <p>
              AI won’t save you if you can’t remember what you promised
              yesterday.
            </p>

            <p>
              One of the biggest misconceptions I see is the idea that recording
              the meeting is enough.
            </p>

            <p>It’s not.</p>

            <p>
              Recording gives you recall. But most teams don’t have a recall
              problem. They have a capture and follow-through problem.
            </p>

            <p>
              The decision was made. But no one pulled it out. No one logged who
              owned what. No one set the due date. So it disappeared.
            </p>

            <p>
              Now multiply that across every recurring staff meeting, every
              functional sync, every “quick call” with 5 action items baked in.
            </p>

            <p>
              This is where execution breaks — not because the call didn’t go
              well, but because the call didn’t turn into anything concrete.
            </p>

            <p>
              I don’t think most teams need better AI summaries. I think they
              need better memory infrastructure. Something that holds the thread
              after the call ends.
            </p>

            <p>
              Without it, meetings become performance. Everyone nods, agrees,
              moves on — and two weeks later someone says, “didn’t we decide to
              do that?”
            </p>

            <p>
              We built Ambient for this exact use case. Not for meeting recaps.
              For memory.
            </p>

            <p>
              Because context loss doesn’t feel like failure. It just feels like
              nothing moving.
            </p>

            <p>And you can’t fix that with a smarter transcript.</p>
          </Fragment>
        ),
      },
      {
        id: "general-post-2",
        content: (
          <Fragment>
            <p>
              Every founder I know has ten tools for insight. Heatmaps,
              dashboards, OKRs, weekly updates. Everyone knows what’s happening.
            </p>

            <p>
              But the second you ask, “Who’s owning this?” or “What’s the status
              on that thing from last week?” the answers get fuzzy. Or they
              don’t come at all.
            </p>

            <p>
              We’ve overbuilt for visibility and underbuilt for ownership.
              Everything looks clean on a dashboard, until you start asking real
              questions about follow-through.
            </p>

            <p>
              Insight without action is just noise. And most companies are
              buried in it.
            </p>

            <p>
              Exec meetings create alignment — temporarily. By Tuesday, most of
              it’s gone. Slack moves too fast. Docs go stale. Deadlines slip
              without anyone realizing it. It’s not about intent. It’s about the
              fact that there’s no system holding the thread.
            </p>

            <p>And that’s where most teams break — quietly.</p>

            <p>
              You want to move fast? Don’t start by adding AI to your stack.
              Start by getting clear on what was agreed, who owns it, when it’s
              due, and what slipped through last week.
            </p>

            <p>
              That’s the actual operating layer. Everything else is decoration.
            </p>

            <p>Fix the memory layer.</p>
          </Fragment>
        ),
      },
    ],
    whyBox: {
      heading: "Why the above posts?",
      points: [
        "It hits Ambient’s core product thesis — 'memory over summary'. Ambient isn’t just a meeting tool - It’s a memory system for executive teams.",
        "This post reframes a popular assumption ('AI summaries are enough') and challenges it directly, which Lawrence does often in his posts.",
        "The phrase: 'We built Ambient for this exact use case. Not for meeting recaps. For memory.' — this is the product’s mission in one sentence.",
        "Product-Mission - It’s literally about fixing the broken memory layer",
        "ICP-Relevant - Targets exec teams buried in “noise” not follow-through",
        "Tone-Perfect - Sharp, clean, founder-speak — not marketing speak",
        "Narrative-Driven - Walks from insight to problem to POV without pitching",
        "Shareable - Lines like “Insight without action is just noise” are gold",
      ],
    },
  },
];

export const stanCategories = [
  {
    categoryName: "Technical posts",
    note: "These posts are created with very little context for now",
    posts: [
      {
        id: "technical-post-1",
        content: (
          <Fragment>
            <p>
              Most companies don’t need better cash flow reports. They need cash
              flow systems that react, adapt, and explain themselves.
            </p>

            <p>
              Here’s how AI is finally making that possible—based on what we’ve
              seen at <strong>Balance.io</strong> and what{" "}
              <strong>J.P. Morgan</strong> just confirmed across global treasury
              teams:
            </p>

            <p>
              <strong>1. Modeling Behavior, Not Just Averages</strong>
            </p>
            <p>
              Traditional forecasts guess based on historical snapshots. AI
              models—especially ensemble learners and deep nets—build off
              dynamic inputs like:
            </p>
            <ul className="list-disc ml-6">
              <li>payment patterns by customer</li>
              <li>macroeconomic indicators</li>
              <li>supply chain velocity</li>
              <li>even regulatory headlines</li>
            </ul>
            <p>
              Neural nets can reduce forecast error rates by up to 50%—but only
              if you build traceability in. Treasury teams can’t operate off
              black boxes. Interpretability isn’t optional. It’s the job.
            </p>

            <p>
              <strong>2. Real-Time Forecasting with Multi-Source Inputs</strong>
            </p>
            <p>The biggest unlock? Feeding models real-time signals:</p>
            <ul className="list-disc ml-6">
              <li>ERP + CRM + POS + market feeds</li>
              <li>Payment statuses as they change</li>
              <li>External noise from social, sentiment, regulation</li>
            </ul>
            <p>
              Also embedded NLP layers that scan unstructured data for liquidity
              risk signals—policy shifts, market shocks, and customer-level
              sentiment.
            </p>
            <p>
              Your cash model shouldn’t just tell you what happened. It should
              tell you what’s shifting now.
            </p>

            <p>
              <strong>3. AI-Driven Simulation and Stress Testing</strong>
            </p>
            <p>
              Legacy stress tests use 3–5 scenarios built in Excel. AI builds
              3,000 in seconds. Using enhanced Monte Carlo frameworks and live
              balance behavior models, treasury leads can now test:
            </p>
            <ul className="list-disc ml-6">
              <li>supplier pullouts</li>
              <li>currency devaluation</li>
              <li>invoice chain delays</li>
              <li>bank holiday overlaps</li>
            </ul>
            <p>
              The output: not just risk visibility, but next-best decisions in
              language an operator can act on.
            </p>

            <p>
              <strong>4. Where This Is Headed</strong>
            </p>
            <p>The future isn’t just AI-powered. It’s AI-connected:</p>
            <ul className="list-disc ml-6">
              <li>Real-time cash positioning across global entities</li>
              <li>
                Smart liquidity recommendations tied to working capital strategy
              </li>
              <li>Even blockchain-fed accuracy for multi-party transactions</li>
              <li>
                And when quantum hits treasury, the optimization side (timing,
                term matching, FX pair routing) gets even more interesting.
              </li>
            </ul>

            <p>
              This isn’t about replacing treasury teams. It’s about removing the
              noise so they can operate at the strategic level—every single day.
            </p>

            <p>
              At <strong>Balance.io</strong>, we’re building toward that future.
              Predictive dashboards. Operational intelligence.
            </p>
          </Fragment>
        ),
      },
      {
        id: "technical-post-2",
        content: (
          <Fragment>
            <p>
              You can build your own AI-powered cash flow model in Azure. But
              here’s what it actually takes to get it right:
            </p>

            <ul className="list-disc ml-6">
              <li>
                ✅ Clean historical data across payables, receivables, terms,
                timing
              </li>
              <li>
                ✅ Smart model selection (XGBoost, ensemble models, or hybrid
                systems)
              </li>
              <li>✅ DevOps to manage ML pipelines, CI/CD, and retraining</li>
              <li>
                ✅ Ongoing drift detection and retraining logic to keep
                forecasts valid
              </li>
              <li>
                ✅ Integration layers to push results into financial systems,
                dashboards, or workflows
              </li>
            </ul>

            <p>
              This isn’t plug-and-play. It’s hours of engineering and
              iteration—and you’ll need to maintain it.
            </p>

            <p>We’ve been through that cycle.</p>

            <p>
              That’s why at <strong>Balance.io</strong>, we’ve done the heavy
              lifting already. Our models are production-ready, fine-tuned, and
              battle-tested across real customer data—designed to plug in, not
              just prototype.
            </p>

            <p>
              If you’ve got the team and time, DIY is possible.
              <br />
              If you want results this quarter, we're already live.
            </p>

            <p>
              <strong>
                #CashFlowForecasting #AIinFinance #AzureML #EmbeddedFinance
                #BalanceCash #OperatorTools #TreasuryTech #MLinProduction
              </strong>
            </p>
          </Fragment>
        ),
      },
    ],
    whyBox: {
      heading: "Why the above posts?",
      summary:
        "AI in treasury is evolving fast. This post shows Stan is hands-on, building real systems—not reacting to trends.",
      points: [
        "Speaks directly to finance leaders, not general tech audiences.",
        "Frames AI as infrastructure, not buzz or automation.",
        "Matches Stan’s tone: clean, focused, technical, credible.",
        "Reinforces Balance’s product depth without overselling it.",
        "Builds trust with operators who care about systems, not slides.",
        "Engages a technically literate audience without overselling.",
        "Highlights real build complexity to frame product value. Reinforces Balance.io’s technical depth and credibility.",
        "Converts curiosity into conversation without sounding sales-driven",
      ],
    },
  },
  {
    categoryName: "Industry Trends",
    note: "These posts are created with very little context for now",
    posts: [
      {
        id: "industry-post-1",
        content: (
          <Fragment>
            <p>
              <strong>
                Cash Flow Is Still the Top Threat to Small Business in 2025.
              </strong>
            </p>

            <p>
              According to NAB’s latest SME survey, 43% of businesses rank cash
              flow as one of their top three concerns. In the business services
              sector, the number is even higher, with half of all firms citing
              it as a critical issue. This isn’t just about late payments or
              tighter margins—this is about fundamental operational risk.
            </p>

            <p>
              Even as inflation eases slightly and interest rates fall, the
              pressure hasn’t lifted. Delayed receivables, rising payroll costs,
              unpredictable expenses, and outdated financial systems are quietly
              undermining otherwise healthy companies. What makes it even more
              dangerous is that many are still relying on disconnected
              spreadsheets, scattered bank dashboards, and manual workarounds to
              manage liquidity.
            </p>

            <p>
              Cash flow gaps don’t always show up in the profit and loss
              statement—but they’re often the first sign that a business will
              struggle to reinvest, hire, or even survive a downturn. The
              mistake too many companies make is waiting until the pressure
              becomes a crisis before they fix the way they manage cash.
            </p>

            <p>
              That’s exactly why we built Balance.io—to give businesses the
              tools they need to proactively manage liquidity, not react to it.
            </p>

            <p>
              With real-time visibility across every account, automated cash
              sweep strategies, and intelligent forecasting built directly into
              the platform, Balance helps companies turn idle cash into working
              capital, identify risks before they escalate, and run treasury
              operations with the same precision they bring to sales or product.
            </p>

            <p>
              In a market where efficiency isn’t just valued—it’s required—your
              financial systems need to keep up with the pace of
              decision-making.
            </p>

            <p>
              <strong>Cash should be a strength, not a stress point.</strong>
            </p>

            <p>
              #CashFlow #LiquidityManagement #TreasuryTechnology #SMBFinance
              #BalanceCash #FinancialOperations #WorkingCapital #CFOLeadership
            </p>
          </Fragment>
        ),
      },
      {
        id: "industry-post-2",
        content: (
          <Fragment>
            <p>
              <strong>
                Cash Flow Isn’t Just a Finance Problem—It’s a Survival Problem.
              </strong>
            </p>

            <p>
              Exploding Topics research shows that 16% of startup failures are
              directly tied to cash flow and other financial missteps. That
              number should concern every founder—because it’s not about bad
              ideas. It’s about burnout from financial blind spots.
            </p>

            <p>Most early-stage startups:</p>
            <ul className="list-disc ml-6">
              <li>Launch with limited reserves</li>
              <li>Overestimate revenue timelines</li>
              <li>Underestimate the real cost of finding product-market fit</li>
            </ul>

            <p>
              Even more alarming—founders often need 3x more time to validate
              their market than they initially plan for. And during that window,
              if cash isn’t managed with discipline, the business doesn’t pivot.
              It shuts down.
            </p>

            <p>
              Cash flow isn’t a bookkeeping function. It’s an operational
              reality that defines whether a company has enough time to build,
              test, and adapt before running out of options.
            </p>

            <p>
              Startups don’t fail because the product was weak.
              <br />
              They fail because the cash ran dry before they could fix it.
            </p>

            <p>
              At Balance.io, we give founders the visibility and control to
              stretch every dollar further—without the guesswork.
            </p>

            <p>
              #StartupFinance #CashFlow #EarlyStageStartups #Founders
              #VentureOps #FinancialDiscipline #ProductMarketFit #StartupFailure
              #BalanceCash
            </p>
          </Fragment>
        ),
      },
    ],
    whyBox: {
      heading: "Why the above posts?",
      summary:
        "Chose this post because cash flow is a real, data-backed pain for SMBs, and it ties directly to your experience as a founder.",
      points: [
        "It educates without pitching — subtly reinforcing Balance.io’s mission.",
        "The Forbes reference adds credibility, and the tone stays consistent with your usual strategic, operator-focused content.",
        "It’s tailored for your audience of founders, CFOs, and operators, offering value without feeling like a pitch.",
        "It aligns naturally with Balance.io’s mission, showing relevance without being promotional.",
        "The tone reflects your credibility as a founder-operator and positions you as someone who understands startup pain firsthand.",
      ],
    },
  },
  {
    categoryName: "General Post",
    note: "These posts are created with very little context for now",
    posts: [
      {
        id: "general-post-1",
        content: (
          <Fragment>
            <p>
              <strong>
                The cash flow crisis isn’t new. What’s broken is how we’re still
                trying to manage it.
              </strong>
            </p>

            <p>
              Forbes reports that 43% of small-business owners call cash flow
              their top challenge. Another 38% are relying on credit cards or
              draining reserves just to stay operational.
            </p>

            <p>That’s not risk management. That’s survival mode.</p>

            <p>
              The average small business still juggles 10–15 apps to run basic
              finance ops—one for invoicing, another for payments, a spreadsheet
              to forecast, and usually a manual fix when something breaks. It’s
              duct tape pretending to be infrastructure.
            </p>

            <p>
              The result? Missed payments. Delayed decisions. Owners spending
              more time reconciling numbers than running the business.
            </p>

            <p>
              Fintech’s job now isn’t to build another app. It’s to replace the
              maze with a single, intelligent system that does what founders
              actually need:
            </p>

            <ul className="list-disc ml-6">
              <li>Real-time clarity</li>
              <li>Smarter forecasting</li>
              <li>Faster access to working capital</li>
              <li>Tools that work together, not against each other</li>
            </ul>

            <p>
              At Balance.io, that’s been our focus from day one: eliminate the
              noise, automate the movement, and give businesses the one thing
              they need most—room to think clearly and act faster.
            </p>

            <p>
              Cash flow shouldn’t come down to gut feel and spreadsheets at
              midnight. It should be clear the moment you open your laptop.
            </p>

            <p>
              #CashFlow #Fintech #BalanceCash #SmallBusinessFinance
              #LiquidityOps #Forecasting #TreasuryTools #BuiltForBusiness
            </p>
          </Fragment>
        ),
      },
      {
        id: "general-post-2",
        content: (
          <Fragment>
            <p>
              <strong>
                Australian SMBs just put a spotlight on a global issue.
              </strong>
            </p>

            <p>
              CommBank’s latest research shows that 80% of small businesses in
              Australia struggled with cash flow last year.
            </p>

            <p>That stat alone isn’t surprising. What is?</p>

            <ul className="list-disc ml-6">
              <li>30% had dangerously low reserves</li>
              <li>27% had to dip into personal savings</li>
              <li>Many didn’t pay themselves—at all.</li>
            </ul>

            <p>This isn’t bad accounting. This is a system problem.</p>

            <p>
              Even when business owners know what to do—cut expenses, look for
              alternate revenue, adjust pricing—it’s rarely enough. The real
              issue is that most still lack clean, connected visibility into
              where the cash sits, what’s at risk, and what’s coming.
            </p>

            <p>The tools still lag the urgency.</p>

            <p>
              CommBank and AGSM are stepping up with a free course to help SMBs
              better manage cash flow. That’s a strong move. But education alone
              won’t close the gap.
            </p>

            <p>
              The bigger fix needs to come from how we build infrastructure:
            </p>

            <ul className="list-disc ml-6">
              <li>Not another app.</li>
              <li>Not another patch.</li>
            </ul>

            <p>
              But real systems that let small businesses operate like big
              ones—without the complexity.
            </p>

            <p>
              At Balance.io, we’re building for that future—where knowing your
              cash position doesn’t require a spreadsheet and a guess, and
              acting on it doesn’t take 3 days.
            </p>

            <p>
              This isn’t just an Australia problem.
              <br />
              It’s everywhere.
            </p>

            <p>
              #CashFlow #SMBFinance #BalanceCash #LiquidityOps
              #SmallBusinessStrategy #FinancialTools #GlobalSMB #WorkingCapital
            </p>
          </Fragment>
        ),
      },
    ],
    whyBox: {
      heading: "Why the above posts?",
      summary:
        "This post uses timely, data-backed insight from Forbes and QuickBooks to highlight a key SMB challenge—cash flow inefficiency—that directly aligns with Stan’s experience and Balance.io’s mission.",
      points: [
        "It frames the problem in a clear, relatable way without oversimplifying or relying on fintech jargon.",
        "Stan’s perspective as a founder who’s navigated capital constraints makes the message credible and grounded.",
        "It reinforces Balance.io’s positioning without being promotional, staying true to the tone and structure of Stan’s past content.",
        "References a major institution (CommBank), adding built-in credibility.",
        "Uses Australia’s data to surface a universal SMB liquidity problem.",
        "Targets serious operators—CFOs, founders, and financial decision-makers who think in systems",
      ],
    },
  },
];

export const KanishkCategories = [
  {
    categoryName: "Technical posts",
    note: "These posts are created with very little context for now",
    posts: [
      {
        id: "technical-post-1",
        content: (
          <Fragment>
            <p>
              Everyone talks about "AI-powered document processing." What they
              don't talk about is what happens when that document is 8 pages of
              poorly scanned brokerage data with handwritten notes, or a 60MB
              estate plan with zero structure. Here's how we built Powder for
              that reality, not polished demo files.
            </p>

            <p>
              <strong>1. Intake that doesn't assume structure</strong>
              <br />
              Most tools choke unless docs fit narrow templates. We take PDFs,
              Excel files, faxes, images, everything. Our pipeline uses OCR and
              layout detection, but when formats are messy, we flag and route
              instead of failing.
            </p>

            <p>
              <strong>2. Classification by context, not guesswork</strong>
              <br />A private investment memo and custodial summary might look
              similar, but require different logic. Our models classify based on
              content signals, not layout.
            </p>

            <p>
              <strong>3. Field extraction built for finance</strong>
              <br />
              We don't use brittle rules or generic LLMs. Custom parsers trained
              on thousands of real statements validate tickers, map ownership,
              and retain entity structures. We're rebuilding logic, not just
              "reading" docs.
            </p>

            <p>
              <strong>4. Quality control with analyst instincts</strong>
              <br />
              When values don't add up or account numbers look off, we flag and
              escalate. Most systems pass junk downstream, we don't.
            </p>

            <p>
              <strong>5. Smart workflow handoffs</strong>
              <br />
              Clean doc? Straight to proposal. Messy doc? Senior review. You
              need to know where to trust automation and when to step in.
            </p>

            <p>
              <strong>6. Localized learning</strong>
              <br />
              Models improve with every correction, but your data never trains
              global systems. Privacy is table stakes.
            </p>

            <p>
              Most firms didn't realize how much time teams spent prepping data
              before actual work could start. That's what we fixed. Same-day
              turnaround, 95%+ accuracy. Built for wealth workflows. Not demos.
              If that’s where your drag is, we should talk.
            </p>
          </Fragment>
        ),
      },
      {
        id: "technical-post-2",
        content: (
          <Fragment>
            <p>
              <strong>
                Traditional Analytics vs. AI Analytics: It’s Not an Upgrade.
                It’s a System Redesign.
              </strong>
            </p>

            <p>
              Legacy pipelines were built for batch workflows:
              <br />
              ETL → feature selection → modeling → dashboard refresh.
            </p>

            <p>Latency was tolerated. Manual querying was standard.</p>

            <p>But that stack breaks when:</p>
            <ul>
              <li>Data sources multiply</li>
              <li>Questions shift mid-cycle</li>
              <li>Signals appear in unstructured formats</li>
            </ul>

            <p>
              <strong>AI-native analytics changes the foundation:</strong>
            </p>

            <p>
              <strong>1. LLMs as semantic query engines</strong>
              <br />
              Business users ask in natural language. No SQL. The LLM maps
              intent to multi-source joins, executes optimized queries, and
              returns structured output, all in real time.
            </p>

            <p>
              <strong>2. ML-driven feature inference</strong>
              <br />
              No hand-curated predictors. Systems like AutoML scan across
              dimensionality, detect statistical relevance, and optimize model
              inputs dynamically.
            </p>

            <p>
              <strong>3. Streaming anomaly detection</strong>
              <br />
              Traditional dashboards lag behind. AI engines use real-time inputs
              + behavioral baselines to surface deviations as they emerge, not
              hours later.
            </p>

            <p>
              <strong>4. Inference-time data fusion</strong>
              <br />
              Structured ERP tables, unstructured docs, embeddings, logs —
              unified at model runtime. No schema stitching. Just output.
            </p>

            <p>
              <strong>5. Always-on learning</strong>
              <br />
              Old models trained once. AI pipelines retrain incrementally,
              adapting to drift, seasonality, and noise, continuously improving
              prediction fidelity.
            </p>

            <p>
              <strong>In short:</strong>
              <br />
              Traditional analytics is descriptive. AI analytics is inferential,
              generative, and adaptive.
            </p>

            <p>
              If your system can’t interpret, learn, or respond, you’re not
              analyzing. You’re archiving.
            </p>
          </Fragment>
        ),
      },
    ],
    whyBox: {
      heading: "Why the above posts?",
      summary:
        "AI adoption is accelerating, but most content stays shallow. Readers need clarity on what’s actually working. This post breaks down the real architecture behind AI-powered workflows and analytics.",
      points: [
        "Goes beyond surface-level AI claims: Clearly shows how parsing, validation, and escalation logic is engineered, not hand-waved.",
        "Reframes the shift in analytics: From batch reports and dashboards to real-time, multi-source decision intelligence.",
        "Builds technical trust: Not just what the product does, but how it handles edge cases and scales with control.",
      ],
    },
  },
  {
    categoryName: "Industry Trends",
    note: "These posts are created with very little context for now",
    posts: [
      {
        id: "industry-post-1",
        content: (
          <Fragment>
            <p>
              <strong>
                65.7% of employees will have an AI meeting assistant by end of
                2025.
              </strong>
            </p>

            <p>Not because they love bots.</p>

            <p>Because meetings have become a black hole.</p>

            <p>
              <strong>Here’s what actually breaks:</strong>
            </p>

            <ul>
              <li>Notes don’t get taken.</li>
              <li>Action items don’t get tracked.</li>
              <li>People join late and leave confused.</li>
              <li>Follow-ups vanish into email threads that go nowhere.</li>
            </ul>

            <p>
              <strong>The result?</strong>
            </p>
            <ul>
              <li>Decisions slip.</li>
              <li>Work gets duplicated.</li>
              <li>No one’s really sure what happened.</li>
            </ul>

            <p>
              Most teams aren’t short on talent.
              <br />
              They’re short on clarity.
            </p>

            <p>And clarity dies in unstructured meetings.</p>

            <p>
              The best teams are no longer relying on memory.
              <br />
              They’re shipping faster because the system remembers for them.
            </p>

            <p>
              Recaps show up automatically.
              <br />
              Tasks push into Asana or Notion.
              <br />
              The person who missed the call gets the “what you missed” before
              they even ask.
            </p>

            <p>
              It’s not futuristic.
              <br />
              It’s already default behavior inside teams using tools like
              Powder.
            </p>

            <p>
              If your meeting tool can’t do that today,
              <br />
              you’re burning time on problems that are already solved.
            </p>
          </Fragment>
        ),
      },
      {
        id: "industry-post-2",
        content: (
          <Fragment>
            <p>
              <strong>
                82% of companies say they’re using or exploring AI.
              </strong>
            </p>

            <p>
              Sounds impressive.
              <br />
              But ask anyone building in the real world — adoption isn’t the
              signal.
              <br />
              Usage that moves the needle is.
            </p>

            <p>
              <strong>Here’s what we’re seeing:</strong>
            </p>

            <ul>
              <li>
                91% of small businesses using GenAI think it’ll drive growth.
              </li>
              <li>But only 13% of CFOs report strong ROI.</li>
              <li>6 in 10 enterprises have rolled it out.</li>
              <li>But most are still waiting on clear payback.</li>
            </ul>

            <p>That gap? It’s the difference between demos and deployment.</p>

            <p>
              A working AI loop doesn’t start with a model.
              <br />
              It starts with a broken process that finally hits a wall.
            </p>

            <p>
              <strong>So the real question isn’t “Are you using AI?”</strong>
              <br />
              It’s <em>“Where is AI the only viable path forward now?”</em>
            </p>

            <p>That’s where compounding begins.</p>
          </Fragment>
        ),
      },
    ],
    whyBox: {
      heading: "Why the above posts?",
      summary:
        "These posts offer trends recaps. These posts are clarity checks on AI's real-world utility.",
      points: [
        "Both posts cut through the noise and reframe where adoption hype meets operational drag.",
        "They match a founder voice focused on execution over narrative. Not “AI is coming,” but “AI is already helping teams work smarter.”",
        "They speak to the critical wedge in AI SaaS: not capability, but usage that compounds, AI that fits into broken workflows and fixes them quietly.",
        "Stats give credibility, but the focus stays on gaps, between what tools promise and where teams actually struggle (meetings, memory, follow-through, ROI).",
        "Perfect alignment with audiences tired of dashboards, demos, and theory, these posts appeal to leaders who ship and want AI to do.",
      ],
    },
  },
  {
    categoryName: "General Post",
    note: "These posts are created with very little context for now",
    posts: [
      {
        id: "general-post-1",
        content: (
          <Fragment>
            <p>
              If your team works with client statements, balance sheets, Excel
              dumps, or scanned brokerage PDFs, you've likely faced this
              question:
            </p>

            <p>
              <strong>
                Where does AI actually reduce load, and where does it quietly
                add more?
              </strong>
            </p>

            <p>
              At Powder, we built for that breakpoint. Not for feature
              checklists. For workflows that actually hold up in production.
            </p>

            <p>
              <strong>
                Here’s where AI moves the needle in live financial data
                pipelines:
              </strong>
            </p>

            <ul>
              <li>
                <strong>Multi-format ingestion:</strong> Handles PDFs, faxes,
                scans, Excel. Layout agnostic.
              </li>
              <li>
                <strong>Summarization:</strong> Pulls signal from noisy reports.
                Turns 38 pages into 3 minutes.
              </li>
              <li>
                <strong>Proposal drafting:</strong> Generates clean base decks
                from real positions, not boilerplate.
              </li>
              <li>
                <strong>Held-away assets:</strong> Converts screenshots and
                random uploads into structured data.
              </li>
              <li>
                <strong>Private asset parsing:</strong> Extracts commitments,
                waterfalls, and terms from capital calls.
              </li>
              <li>
                <strong>Data QA:</strong> Flags mismatched tickers, missing
                values, duplicates before they reach the proposal.
              </li>
              <li>
                <strong>Contextual classification:</strong> Tags by tax, asset
                type, risk level using model logic, not hard-coded rules.
              </li>
              <li>
                <strong>Allocation insights:</strong> Runs real-time breakdowns
                without routing through ops.
              </li>
              <li>
                <strong>Client memory:</strong> Retains and structures recurring
                themes so the next meeting isn't a reset.
              </li>
              <li>
                <strong>Speed:</strong> If it's not same-day, it won’t help
                close.
              </li>
            </ul>

            <p>
              This isn’t AI for show. It’s infrastructure. Built to give
              advisors leverage without asking them to clean up behind the
              model.
            </p>
          </Fragment>
        ),
      },
      {
        id: "general-post-2",
        content: (
          <Fragment>
            <p>
              <strong>
                Your AI strategy is only as good as your worst input.
              </strong>
            </p>

            <p>
              Most teams think about AI like it’s a top-down problem.
              <br />
              Models. Pipelines. Output quality.
            </p>

            <p>But what breaks isn’t the model.</p>

            <ul>
              <li>It’s the 8th Excel file that didn’t match the schema.</li>
              <li>The scanned doc with a typo in the account number.</li>
              <li>The one PDF nobody opened because it “looked fine.”</li>
            </ul>

            <p>This is where things fail. Quietly.</p>

            <p>
              Because as you scale, edge cases aren’t rare.
              <br />
              They’re everywhere.
            </p>

            <p>
              The strongest AI strategies don’t just automate.
              <br />
              They audit. Flag. Ask when they’re not sure.
            </p>

            <p>
              Not because they’re fragile.
              <br />
              Because they’re built for reality, not demos.
            </p>

            <p>
              If your AI is underperforming, don’t tune the model.
              <br />
              Start with your messiest input.
            </p>

            <p>
              That’s where the real risk lives.
              <br />
              And the real opportunity.
            </p>
          </Fragment>
        ),
      },
    ],
    whyBox: {
      heading: "Why the above posts?",
      summary:
        "Both posts hit at the core of what Powder solves daily—messy inputs, missed follow-ups, and broken advisor workflows that GenAI should be fixing but mostly isn’t.",
      points: [
        "Powder was built because “AI document processing” wasn’t built for real documents. We’ve seen what happens when a 60MB estate file crashes someone’s proposal flow.",
        "Same for AI meeting assistants. Most sound good in the demo. Few actually help you move faster or remember better when it matters.",
        "These posts cut through the noise and say what most vendors won’t: you don’t need more AI hype. You need something that handles the ugly, real-world inputs and gives you back leverage.",
        "That’s exactly what Powder is. Not just smarter software, but real infrastructure for wealth teams who are scaling faster than their legacy tools can keep up.",
      ],
    },
  },
];
