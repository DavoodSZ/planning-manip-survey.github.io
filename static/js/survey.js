(function () {
  var taxonomy = [
    {
      key: "stack",
      label: "Autonomy Stack",
      kicker: "Context",
      title: "Motion planning is the bridge between task intent and executable robot motion.",
      text: "The survey positions motion planning inside the manipulation autonomy stack, where perception, language, task planning, inverse kinematics, motion planning, and control must work together.",
      image: "./static/images/02. AutonomyStack.png",
      caption: "A toy manipulation autonomy stack showing where motion planning fits.",
      tags: ["task planning", "IK", "motion planning", "control"]
    },
    {
      key: "prelim",
      label: "Planning Preliminaries",
      kicker: "Foundations",
      title: "Workspace geometry and configuration-space feasibility are not the same problem.",
      text: "The paper introduces workspace versus configuration space, path feasibility, planning cost, success rate, clearance, smoothness, and other metrics used to compare planners.",
      image: "./static/images/03. PlanningDef.png",
      caption: "Workspace and configuration-space views for a planar manipulator.",
      tags: ["workspace", "configuration space", "metrics", "feasibility"]
    },
    {
      key: "sampling",
      label: "Sampling-Based",
      kicker: "Classical Planning",
      title: "Sampling, steering, and collision checking define the core planning loop.",
      text: "Sampling-based planners explore the configuration space by repeatedly drawing samples, steering toward them, and validating edges. Neural methods can improve each primitive.",
      image: "./static/images/04. SamplingPrimitives.png",
      caption: "The three primitives of sampling-based planning algorithms.",
      tags: ["sampling", "steering", "collision checking", "RRT"]
    },
    {
      key: "optimization",
      label: "Optimization",
      kicker: "Classical Planning",
      title: "Trajectory optimization is powerful, but warm starts matter.",
      text: "Optimization-based planners refine a candidate trajectory under smoothness, goal, and obstacle constraints. Neural networks can provide warm starts or learn cost/constraint proxies.",
      image: "./static/images/05. OptimizationBased.png",
      caption: "Different initial trajectories can lead to different optimized solutions.",
      tags: ["warm start", "trajectory optimization", "constraints", "cost"]
    },
    {
      key: "collision",
      label: "Collision",
      kicker: "Safety Primitive",
      title: "Collision checking is often the expensive inner loop.",
      text: "The survey covers geometric collision checking, spatial decomposition, learned distance fields, neural SDFs, and proxy collision checkers for accelerating feasibility queries.",
      image: "./static/images/06. CollisionChecking.png",
      caption: "Common collision checking practices for manipulators and environments.",
      tags: ["distance", "SDF", "occupancy", "proximity"]
    },
    {
      key: "learning",
      label: "Neural Modules",
      kicker: "Learning Toolkit",
      title: "Deep learning changes what planners can amortize.",
      text: "MLPs, CNNs, RNNs, transformers, GNNs, point cloud networks, generative models, and neural fields have been used to encode scenes, generate samples, model trajectories, and query safety.",
      image: "./static/images/08. MLP-CNN-RRN-GNN.png",
      caption: "Core neural model families and their planning applications.",
      tags: ["MLP", "CNN", "Transformer", "GNN", "PCNet"]
    },
    {
      key: "generative",
      label: "Generative",
      kicker: "Multimodal Planning",
      title: "Generative models are natural tools for multimodal motion distributions.",
      text: "VAEs, GANs, normalizing flows, diffusion models, and flow matching can generate diverse samples or trajectories, but deployment requires validation and robust generalization.",
      image: "./static/images/DGM.png",
      caption: "Deep generative model families covered by the survey.",
      tags: ["VAE", "GAN", "flow", "diffusion", "flow matching"]
    }
  ];

  var modules = [
    ["MLPs", "Compact function approximators for steering, collision proxies, trajectory costs, and optimization warm starts."],
    ["CNNs", "Image or voxel-based scene encoders for end-to-end planning and collision checking."],
    ["Transformers", "Sequence and set models for trajectories, planning context, and tokenized scene representations."],
    ["GNNs", "Relational inductive bias for robot kinematics, planning graphs, and structured collision reasoning."],
    ["Point Cloud Networks", "Direct geometry encoders for robot and workspace observations without dense voxelization."],
    ["Generative Models", "VAE, GAN, flow, diffusion, and flow matching models for multimodal samples or trajectories."]
  ];

  var papers = [
    {
      title: "PCNet-style end-to-end planners",
      meta: "End-to-End Planning",
      category: "e2e",
      tags: ["PCNet", "point clouds", "trajectory"],
      text: "Directly predict motion plans from scene representations, often trading explicit search for fast inference."
    },
    {
      title: "Motion Planning Networks",
      meta: "Neural Informed Sampling",
      category: "sampling",
      tags: ["MPNet", "sampling", "planner primitive"],
      text: "Use learned representations to guide sampling-based planners toward promising regions of configuration space."
    },
    {
      title: "VAE-informed samplers",
      meta: "Generative Sampling",
      category: "sampling",
      tags: ["VAE", "multimodal", "samples"],
      text: "Model distributions over useful samples or paths for informed exploration in difficult planning problems."
    },
    {
      title: "Normalizing-flow samplers",
      meta: "Generative Sampling",
      category: "sampling",
      tags: ["flow", "density", "informed sampling"],
      text: "Use invertible generative models to learn complex sampling distributions for motion planning."
    },
    {
      title: "Learned steering functions",
      meta: "Sampling-Based Primitive",
      category: "steering",
      tags: ["MLP", "local planner", "edge"],
      text: "Replace or assist the local steering primitive that connects two configurations in a planning tree."
    },
    {
      title: "Warm-started trajectory optimization",
      meta: "Optimization",
      category: "optimization",
      tags: ["MLP", "warm start", "cost"],
      text: "Use neural networks to initialize or accelerate optimization-based planners while preserving downstream refinement."
    },
    {
      title: "Diffusion and generative optimizers",
      meta: "Optimization",
      category: "optimization",
      tags: ["diffusion", "trajectory", "constraints"],
      text: "Generate candidate trajectories or optimize under learned costs, often requiring collision-aware guidance or validation."
    },
    {
      title: "GNN collision checking",
      meta: "Collision Querying",
      category: "collision",
      tags: ["GNN", "collision", "graphs"],
      text: "Learn graph-based collision or edge-validity proxies to reduce expensive geometric checking."
    },
    {
      title: "Neural SDF and distance fields",
      meta: "Collision Querying",
      category: "collision",
      tags: ["SDF", "distance", "neural field"],
      text: "Represent proximity and collision information with learned continuous fields for faster planning queries."
    },
    {
      title: "Generalist neural motion planners",
      meta: "Future Direction",
      category: "generalist",
      tags: ["generalization", "foundation models", "OOD"],
      text: "Aim to scale from task-specific neural planners to robust planners that generalize across robots, scenes, and domains."
    },
    {
      title: "Constraint-aware neural planning",
      meta: "Safety",
      category: "generalist",
      tags: ["safety", "constraints", "validation"],
      text: "Combines neural proposal generation with explicit constraints, verification, runtime monitors, or safety filters."
    },
    {
      title: "Point-cloud conditioned planning",
      meta: "End-to-End Planning",
      category: "e2e",
      tags: ["PCNet", "scene geometry", "robot geometry"],
      text: "Uses point cloud encoders to reason about geometry while avoiding handcrafted environment abstractions."
    }
  ];

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }

  function mountTaxonomy() {
    var tabs = document.getElementById("taxonomy-tabs");
    if (!tabs) return;

    var kicker = document.getElementById("taxonomy-kicker");
    var title = document.getElementById("taxonomy-title");
    var text = document.getElementById("taxonomy-text");
    var image = document.getElementById("taxonomy-image");
    var caption = document.getElementById("taxonomy-caption");
    var tagList = document.getElementById("taxonomy-tags");

    function render(item, activeButton) {
      tabs.querySelectorAll(".taxonomy-tab").forEach(function (btn) { btn.classList.remove("active"); });
      if (activeButton) activeButton.classList.add("active");
      kicker.textContent = item.kicker;
      title.textContent = item.title;
      text.textContent = item.text;
      image.src = item.image;
      image.alt = item.label;
      caption.textContent = item.caption;
      tagList.innerHTML = "";
      item.tags.forEach(function (tag) { tagList.appendChild(el("span", "", tag)); });
    }

    taxonomy.forEach(function (item, idx) {
      var btn = el("button", "taxonomy-tab" + (idx === 0 ? " active" : ""), item.label);
      btn.type = "button";
      btn.addEventListener("click", function () { render(item, btn); });
      tabs.appendChild(btn);
      if (idx === 0) render(item, btn);
    });
  }

  function mountModules() {
    var grid = document.getElementById("module-grid");
    if (!grid) return;
    modules.forEach(function (item) {
      var card = el("div", "module-item");
      card.appendChild(el("strong", "", item[0]));
      card.appendChild(el("p", "", item[1]));
      grid.appendChild(card);
    });
  }

  function mountPapers() {
    var grid = document.getElementById("paper-grid");
    var search = document.getElementById("paper-search");
    var filters = document.querySelectorAll(".paper-filter");
    if (!grid || !search) return;
    var current = "all";

    function matches(paper, query) {
      var text = [paper.title, paper.meta, paper.text].concat(paper.tags).join(" ").toLowerCase();
      return text.indexOf(query) !== -1;
    }

    function render() {
      var query = search.value.trim().toLowerCase();
      grid.innerHTML = "";
      var shown = papers.filter(function (paper) {
        return (current === "all" || paper.category === current) && matches(paper, query);
      });
      if (!shown.length) {
        grid.appendChild(el("div", "paper-empty", "No matching papers in this compact browser."));
        return;
      }
      shown.forEach(function (paper) {
        var card = el("article", "paper-card");
        card.appendChild(el("div", "paper-meta", paper.meta));
        card.appendChild(el("h3", "", paper.title));
        card.appendChild(el("p", "", paper.text));
        var tags = el("div", "tag-list");
        paper.tags.forEach(function (tag) { tags.appendChild(el("span", "paper-tag", tag)); });
        card.appendChild(tags);
        grid.appendChild(card);
      });
    }

    filters.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filters.forEach(function (el) { el.classList.remove("active"); });
        btn.classList.add("active");
        current = btn.getAttribute("data-filter");
        render();
      });
    });
    search.addEventListener("input", render);
    render();
  }

  document.addEventListener("DOMContentLoaded", function () {
    mountTaxonomy();
    mountModules();
    mountPapers();
  });
})();
