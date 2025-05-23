import { FC, useState } from "react";
import ReportCard from "./sub-components/ReportCard";
import { FaChartLine } from "react-icons/fa";
import WhyBox from "./sub-components/WhyBox";
import PostNoteBox from "./sub-components/PostNoteBox";
import LinkedInPostCard from "./sub-components/LinkedInPostCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { twMerge } from "tailwind-merge";

const DeanSamplePosts: FC = () => {
  const linkedInReport = useSelector(
    (state: RootState) => state.auditReportSchema
  );

  const {
    reportMetadata: { clientInfo },
  } = linkedInReport;

  const [expandedPosts, setExpandedPosts] = useState<Record<string, boolean>>(
    {}
  );

  const toggleExpand = (id: string) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <ReportCard title="Sample Posts" icon={FaChartLine}>
      {/* Technical Posts */}
      <div>
        <PostNoteBox
          categoryText="Technical posts"
          noteText="These posts are created with very little context for now"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <LinkedInPostCard
            name={clientInfo?.name}
            title={clientInfo?.title}
            profileImage={clientInfo?.profilePictureUrl}
            websiteLink="#"
          >
            <div
              className={twMerge(
                "text-gray-800 space-y-2 text-sm pt-2 transition-all duration-300 relative",
                !expandedPosts["technical-post-1"] &&
                  "line-clamp-[8] overflow-hidden"
              )}
            >
              <>
                <p>
                  ML is just software — until you try to version a 200GB dataset
                  in Git. That’s where the fantasy ends.
                </p>

                <p>
                  You don’t need MLOps tools with fancy dashboards. You need DVC
                  — because Git wasn’t built for data. And data moves.
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
                  Efficient reuse of cached stages across branches and
                  experiments
                </p>

                <p>
                  📁 <strong>Data decoupled from Git</strong>
                </p>
                <p>
                  .dvc files act as references — the real data lives in your
                  remote (S3, GCS, Azure, SSH, doesn’t matter)
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
              </>
              <button
                onClick={() => toggleExpand("technical-post-1")}
                className="absolute bottom-[2px] right-0 bg-white text-xs font-semibold text-linkedIn-primary pl-2 pr-1 cursor-pointer"
              >
                {expandedPosts["technical-post-1"]
                  ? "Show less"
                  : "... Show more"}
              </button>
            </div>
          </LinkedInPostCard>
          <LinkedInPostCard
            name={clientInfo?.name}
            title={clientInfo?.title}
            profileImage={clientInfo?.profilePictureUrl}
            websiteLink="#"
          >
            <div
              className={twMerge(
                "text-gray-800 space-y-2 text-sm pt-2 transition-all duration-300 relative",
                !expandedPosts["technical-post-2"] &&
                  "line-clamp-[8] overflow-hidden"
              )}
            >
              <>
                <p>
                  Multimodal annotation isn’t labeling. It’s temporal,
                  structural, and semantic synchronization across entropic data
                  domains.
                </p>
                <p>
                  If your pipeline can’t track provenance, alignment, and
                  modality-specific schema enforcement, it’s not a pipeline —
                  it’s an art project.
                </p>

                <p>
                  <strong>
                    Technical breakdown of what’s actually required:
                  </strong>
                </p>

                <p>
                  🧩 <strong>Data ingestion & alignment</strong>
                </p>
                <p>
                  Syncing frames (image/video) to tokenized audio/text with
                  sub-100ms accuracy
                </p>
                <p>
                  Handling variable-length inputs (audio windows ≠ text
                  sequences ≠ frame counts)
                </p>
                <p>
                  Timestamp normalization: POSIX time, UTC, video frame
                  indexing, all cross-validated
                </p>

                <p>
                  🧹 <strong>Preprocessing</strong>
                </p>
                <p>
                  Normalize image resolutions, audio sample rates, language
                  encodings
                </p>
                <p>
                  Handle sparse modality presence (e.g. missing captions or
                  desynced mic tracks)
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
                  Label schemas must resolve to unified entity classes, not
                  isolated modal tags
                </p>
                <p>
                  Provenance required: who labeled, when, what model assisted,
                  what confidence
                </p>

                <p>
                  🔁 <strong>Human-in-the-loop augmentation</strong>
                </p>
                <p>Run weak models to pre-label easy data</p>
                <p>
                  Route ambiguous slices (low prediction confidence, high
                  entropy) to annotators
                </p>
                <p>
                  Log model-assist ratio per label type to track where humans
                  still outperform
                </p>

                <p>
                  📈 <strong>Quality control</strong>
                </p>
                <p>
                  Cross-modal consistency checks (e.g. “captioned object must
                  exist in image bounding boxes”)
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
                  Semantic versioning: v3.1 might fix label alignment between
                  audio and captions only
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
                  Multimodal AI doesn’t fail loudly. It fails by learning the
                  wrong thing.
                </p>
                <p>
                  - If your annotations are misaligned, your model encodes error
                  as truth.
                </p>
                <p>
                  - If your labels drift and you don’t version them, your
                  training data is compromised.
                </p>
                <p>
                  - If you can’t trace label origin, you have no audit path. You
                  can’t debug. You can’t trust outputs.
                </p>

                <p>You don’t have training data.</p>
                <p>You have noise that compiles.</p>

                <p>This isn’t data ops. It’s fault-tolerant pipeline design.</p>

                <p>
                  And if you miss one annotation contract, the model won’t break
                  — it’ll converge on the wrong function. Quietly.
                </p>
              </>
              <button
                onClick={() => toggleExpand("technical-post-2")}
                className="absolute bottom-[2px] right-0 bg-white text-xs font-semibold text-linkedIn-primary pl-2 pr-1 cursor-pointer"
              >
                {expandedPosts["technical-post-2"]
                  ? "Show less"
                  : "... Show more"}
              </button>
            </div>
          </LinkedInPostCard>
        </div>
        <div className="my-8">
          <WhyBox
            heading="Why the above posts?"
            points={[
              "Since Dean’s team works on training infrastructure and handling large datasets, this is exactly the kind of tool in industry that solves real pain. Industry constantly deal with reproducibility issues — and DVC helps to build pipelines that actually hold up at scale.",
              "Dean works on projects that combine video, audio, and text, and annotation has always been where things quietly break. This piece is practical for us because it shows how to structure pipelines properly, label stuff, it's the kind of system thinking our audience needs too.",
            ]}
          />
        </div>
      </div>
      {/* Industry Trends */}

      <hr className="mb-12 border-b border-primary/20" />
      <div>
        <PostNoteBox
          categoryText="Industry Trends"
          noteText="These posts are created with very little context for now"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <LinkedInPostCard
            name={clientInfo?.name}
            title={clientInfo?.title}
            profileImage={clientInfo?.profilePictureUrl}
            websiteLink="#"
          >
            <div
              className={twMerge(
                "text-gray-800 space-y-2 text-sm pt-2 transition-all duration-300 relative",
                !expandedPosts["industry-post-1"] &&
                  "line-clamp-[8] overflow-hidden"
              )}
            >
              <>
                <p>
                  <strong>
                    MIT’s model links frames to sounds — no human input to train
                    AI
                  </strong>
                </p>

                <p>
                  AI just got a little closer to how humans process the world.
                </p>

                <p>
                  MIT trained a model to match what’s seen with what’s heard —
                  no manual labels, no supervision. Just raw video and audio,
                  frame by frame.
                </p>

                <p>The key wasn’t more data. It was better structure.</p>

                <p>
                  They split audio into smaller windows, aligned each one to the
                  corresponding frame, and balanced contrastive vs.
                  reconstructive learning with dedicated tokens for each. The
                  result? Clean audio-visual alignment without needing complex
                  architectures or scale.
                </p>

                <p>One frame. One sound. No guessing.</p>

                <p>
                  For teams working on multimodal AI — especially with vision,
                  audio, or LLM inputs — this isn’t just an academic win. It’s a
                  signal. Tight alignment between data types is possible, and
                  you don’t need to trade off traceability or simplicity to get
                  there.
                </p>

                <p>
                  Most ML stacks still can’t version audio alongside video, or
                  link events back to raw inputs.
                </p>

                <p>
                  But as this kind of work becomes standard, that won’t be
                  optional anymore.
                </p>
              </>
              <button
                onClick={() => toggleExpand("industry-post-1")}
                className="absolute bottom-[2px] right-0 bg-white text-xs font-semibold text-linkedIn-primary pl-2 pr-1 cursor-pointer"
              >
                {expandedPosts["industry-post-1"]
                  ? "Show less"
                  : "... Show more"}
              </button>
            </div>
          </LinkedInPostCard>
          <LinkedInPostCard
            name={clientInfo?.name}
            title={clientInfo?.title}
            profileImage={clientInfo?.profilePictureUrl}
            websiteLink="#"
          >
            <div
              className={twMerge(
                "text-gray-800 space-y-2 text-sm pt-2 transition-all duration-300 relative",
                !expandedPosts["industry-post-2"] &&
                  "line-clamp-[8] overflow-hidden"
              )}
            >
              <>
                <p>Synthetic data isn’t the solution. It’s a placeholder.</p>

                <p>
                  As AI adoption grows, especially in data-scarce or
                  privacy-heavy industries, synthetic data has become the go-to
                  workaround. From regional speech to financial transactions, we
                  now generate what we can’t access. It’s fast, compliant, and
                  scalable — on paper.
                </p>

                <p>
                  But real-world data doesn’t behave like a clean dataset. It’s
                  unpredictable. It contradicts itself. It reflects messy edge
                  cases no simulation can fully replicate.
                </p>

                <p>That’s where synthetic data hits its ceiling.</p>

                <p>
                  Yes, GANs, VAEs, and LLMs can simulate user behavior, create
                  pseudo-medical records, or fill in multilingual gaps. But
                  training models solely on synthetic data introduces risk:
                  oversimplified patterns, blind spots in logic, and failure at
                  the edge. Especially in markets like India — with linguistic
                  complexity, layered behaviors, and non-linear digital
                  footprints — synthetic data without real context just doesn’t
                  hold.
                </p>

                <p>
                  Add to that the compute cost, the tuning complexity, and the
                  reality that most synthetic datasets inherit bias from the
                  real ones they’re modeled on — and it’s clear: this isn’t
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
                  finance, education — synthetic data won’t save you from
                  regulatory scrutiny or production surprises. It can’t generate
                  nuance. It doesn’t capture contradiction. It won’t teach your
                  model how real people behave under stress, urgency, or
                  uncertainty.
                </p>

                <p>
                  <strong>
                    It’s a tool, not a foundation.
                    <br />
                    Use it with intention. Use it with caution. And never stop
                    validating against reality.
                  </strong>
                </p>
              </>
              <button
                onClick={() => toggleExpand("industry-post-2")}
                className="absolute bottom-[2px] right-0 bg-white text-xs font-semibold text-linkedIn-primary pl-2 pr-1 cursor-pointer"
              >
                {expandedPosts["industry-post-2"]
                  ? "Show less"
                  : "... Show more"}
              </button>
            </div>
          </LinkedInPostCard>
        </div>
        <div className="my-8">
          <WhyBox
            heading="Why the above posts?"
            points={[
              "Since Dean works closely with ML training and data pipelines, this felt fresh — something new in how we align audio and visuals without labels. What MIT's doing here really shifts how we think about self-supervised learning.",
              "Chose this because it ties directly to the kind of ML systems Dean’s team builds — data-constrained, privacy-bound, high-risk. Synthetic data is everywhere now, but most teams are using it without understanding where it breaks — this post calls that out.",
            ]}
          />
        </div>
      </div>

      {/* General Post */}

      <hr className="mb-12 border-b border-primary/20" />
      <div>
        <PostNoteBox
          categoryText="General Post"
          noteText="These posts are created with very little context for now"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <LinkedInPostCard
            name={clientInfo?.name}
            title={clientInfo?.title}
            profileImage={clientInfo?.profilePictureUrl}
            websiteLink="#"
          >
            <div
              className={twMerge(
                "text-gray-800 space-y-2 text-sm pt-2 transition-all duration-300 relative",
                !expandedPosts["general-post-1"] &&
                  "line-clamp-[9] overflow-hidden"
              )}
            >
              <>
                <p>
                  <strong>
                    Most AI systems don’t fail because of the model.
                  </strong>
                </p>

                <p>
                  They fail because the data doesn’t represent the people it's
                  supposed to serve. That’s not just a fairness issue — it’s an
                  architecture problem.
                </p>

                <p>
                  We train LLMs on languages most of the world doesn’t speak.
                </p>
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
                  That’s where inclusive AI begins — not with the model, but
                  with the architecture underneath it.
                </p>

                <p>
                  <strong>
                    Inclusion doesn’t get solved at the application layer.
                  </strong>
                  <br />
                  It’s a design decision baked into how data moves, how it’s
                  governed, and who it includes by default.
                </p>
              </>
              <button
                onClick={() => toggleExpand("general-post-1")}
                className="absolute bottom-[2px] right-0 bg-white text-xs font-semibold text-linkedIn-primary pl-2 pr-1 cursor-pointer"
              >
                {expandedPosts["general-post-1"]
                  ? "Show less"
                  : "... Show more"}
              </button>
            </div>
          </LinkedInPostCard>
          <LinkedInPostCard
            name={clientInfo?.name}
            title={clientInfo?.title}
            profileImage={clientInfo?.profilePictureUrl}
            websiteLink="#"
          >
            <div
              className={twMerge(
                "text-gray-800 space-y-2 text-sm pt-2 transition-all duration-300 relative",
                !expandedPosts["general-post-2"] &&
                  "line-clamp-[8] overflow-hidden"
              )}
            >
              <>
                <p>Synthetic data isn’t the solution. It’s a placeholder.</p>

                <p>
                  As AI adoption grows, especially in data-scarce or
                  privacy-heavy industries, synthetic data has become the go-to
                  workaround. From regional speech to financial transactions, we
                  now generate what we can’t access. It’s fast, compliant, and
                  scalable — on paper.
                </p>

                <p>
                  But real-world data doesn’t behave like a clean dataset. It’s
                  unpredictable. It contradicts itself. It reflects messy edge
                  cases no simulation can fully replicate.
                </p>

                <p>That’s where synthetic data hits its ceiling.</p>

                <p>
                  Yes, GANs, VAEs, and LLMs can simulate user behavior, create
                  pseudo-medical records, or fill in multilingual gaps. But
                  training models solely on synthetic data introduces risk:
                  oversimplified patterns, blind spots in logic, and failure at
                  the edge. Especially in markets like India — with linguistic
                  complexity, layered behaviors, and non-linear digital
                  footprints — synthetic data without real context just doesn’t
                  hold.
                </p>

                <p>
                  Add to that the compute cost, the tuning complexity, and the
                  reality that most synthetic datasets inherit bias from the
                  real ones they’re modeled on — and it’s clear: this isn’t
                  plug-and-play.
                </p>

                <p>
                  The best use case for synthetic data?
                  <br />
                  Fill the gaps, don’t replace the map.
                </p>

                <p>
                  If you’re training models for high-risk domains — healthcare,
                  finance, education — synthetic data won’t save you from
                  regulatory scrutiny or production surprises. It can’t generate
                  nuance. It doesn’t capture contradiction. It won’t teach your
                  model how real people behave under stress, urgency, or
                  uncertainty.
                </p>

                <p>
                  It’s a tool, not a foundation.
                  <br />
                  Use it with intention. Use it with caution. And never stop
                  validating against reality.
                </p>
              </>
              <button
                onClick={() => toggleExpand("general-post-2")}
                className="absolute bottom-[2px] right-0 bg-white text-xs font-semibold text-linkedIn-primary pl-2 pr-1 cursor-pointer"
              >
                {expandedPosts["general-post-2"]
                  ? "Show less"
                  : "... Show more"}
              </button>
            </div>
          </LinkedInPostCard>
        </div>
        <div className="my-8">
          <WhyBox
            heading="Why the above posts?"
            points={[
              "Dean’s been hands-on with data systems, so the idea that inclusion starts at the architecture layer, not the model, just makes sense. This one stood out because it's not talked about enough in real ML workflows.",
              "Chose this because it ties directly to the kind of ML systems Dean’s team builds — data-constrained, privacy-bound, high-risk. Synthetic data is everywhere now, but most teams are using it without understanding where it breaks — this post calls that out.",
            ]}
          />
        </div>
      </div>
    </ReportCard>
  );
};

export default DeanSamplePosts;
